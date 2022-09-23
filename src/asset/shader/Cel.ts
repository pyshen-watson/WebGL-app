export const celVertex:string = `

    attribute vec3 aVertexPosition;
    attribute vec3 aVertexColor;
    attribute vec3 aVertexNormal;

    uniform mat4 mvMatrix;
    uniform mat4 pMatrix;

    varying vec4 fragcolor;
    varying vec3 mvVertex;
    varying vec3 normal;

    void main(void) {
        gl_Position = pMatrix * mvMatrix * vec4(aVertexPosition, 1.0);
        fragcolor = vec4(aVertexColor,1.0);
        mvVertex = (mvMatrix * vec4(aVertexPosition, 1.0)).xyz;
        normal = normalize(mat3(mvMatrix) * aVertexNormal);
    }
`

export const celFragment:string = `

    precision mediump float;

    uniform vec3 lightColor1;
    uniform vec3 lightColor2;
    uniform vec3 lightColor3;
    uniform vec4 lightPosition1;
    uniform vec4 lightPosition2;
    uniform vec4 lightPosition3;

    uniform float Ka;
    uniform float Kd;
    uniform float Ks;
    uniform float Shininess;

    varying vec4 fragcolor;
    varying vec3 normal;
    varying vec3 mvVertex;

    void main(void) {


        /* ambient */
        vec3  Ambient = ceil(Ka * 4.0) / 4.0 * vec3(fragcolor);

        /* diffuse */
        vec3 L1 = normalize(vec3(lightPosition1) - mvVertex);
        vec3 L2 = normalize(vec3(lightPosition2) - mvVertex);
        vec3 L3 = normalize(vec3(lightPosition3) - mvVertex);

        float D1 = Kd * max(dot(normal, L1),0.0);
        float D2 = Kd * max(dot(normal, L2),0.0);
        float D3 = Kd * max(dot(normal, L3),0.0);

        /* specular */
        vec3 V = normalize(-mvVertex);

        vec3 R1 = reflect(-L1, normal);
        vec3 R2 = reflect(-L2, normal);
        vec3 R3 = reflect(-L3, normal);

        float S1 = Ks * pow(max(dot(R1,V), 0.0), Shininess);
        float S2 = Ks * pow(max(dot(R2,V), 0.0), Shininess);
        float S3 = Ks * pow(max(dot(R3,V), 0.0), Shininess);

        float DS1 =  ceil((D1 + S1) * 4.0) / 4.0;
        float DS2 =  ceil((D2 + S2) * 4.0) / 4.0;
        float DS3 =  ceil((D3 + S3) * 4.0) / 4.0;

        vec3 diffuseSpecular1 = lightColor1 * DS1 * vec3(fragcolor);
        vec3 diffuseSpecular2 = lightColor2 * DS2 * vec3(fragcolor);
        vec3 diffuseSpecular3 = lightColor3 * DS3 * vec3(fragcolor);
        vec3 DiffuseSpecular = diffuseSpecular1 + diffuseSpecular2 + diffuseSpecular3;

        vec3 color = Ambient + DiffuseSpecular;
        gl_FragColor = vec4(color,1.0);

    }
`