export const gouraudVertex:string = `

    attribute vec3 aVertexPosition;
    attribute vec3 aVertexColor;
    attribute vec3 aVertexNormal;

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

    uniform mat4 mvMatrix;
    uniform mat4 pMatrix;

    varying vec4 fragcolor;

    void main(void) {

        vec3 mvVertex =  (mvMatrix * vec4(aVertexPosition, 1.0)).xyz;
        vec3 mvNormal =  (mat3(mvMatrix) * aVertexNormal);

        /* ambient */
        vec3 Ambient = aVertexColor * Ka;

        /* diffuse */
        vec3 N = normalize(mvNormal);
        vec3 L1 = normalize(vec3(lightPosition1) - mvVertex);
        vec3 L2 = normalize(vec3(lightPosition2) - mvVertex);
        vec3 L3 = normalize(vec3(lightPosition3) - mvVertex);

        vec3 diffuse1 = lightColor1 * Kd * aVertexColor * max(dot(L1,N), 0.0);
        vec3 diffuse2 = lightColor2 * Kd * aVertexColor * max(dot(L2,N), 0.0);
        vec3 diffuse3 = lightColor3 * Kd * aVertexColor * max(dot(L3,N), 0.0);
        vec3 Diffuse = diffuse1 + diffuse2 + diffuse3;

        /* specular */
        vec3 V = -normalize(mvVertex);
        vec3 H1 = normalize(L1+V);
        vec3 H2 = normalize(L2+V);
        vec3 H3 = normalize(L3+V);

        vec3 specular1 = lightColor1 * Ks * pow(max(dot(H1,N), 0.0), Shininess);
        vec3 specular2 = lightColor2 * Ks * pow(max(dot(H2,N), 0.0), Shininess);
        vec3 specular3 = lightColor3 * Ks * pow(max(dot(H3,N), 0.0), Shininess);
        vec3 Specular = specular1 + specular2 + specular3;

        vec3 color = Ambient + Diffuse + Specular;

        fragcolor = vec4(color, 1.0);
        gl_Position = pMatrix * mvMatrix * vec4(aVertexPosition, 1.0);
    }
`
export const gouraudFragment:string = `
    precision mediump float;
    varying vec4 fragcolor;

    void main(void) {
        gl_FragColor = fragcolor;
    }
`