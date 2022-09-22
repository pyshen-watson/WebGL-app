export const phongVertex:string = `

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
        fragcolor = vec4(aVertexColor.rgb, 1.0);
        mvVertex = (mvMatrix * vec4(aVertexPosition,1.0)).xyz;
        normal = normalize(mat3(mvMatrix) * aVertexNormal);
    }
`
export const phongFragment:string = `

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
        vec3  Ambient = Ka * vec3(fragcolor);

        /* diffuse */
        vec3 L1 = normalize(vec3(lightPosition1) - mvVertex);
        vec3 L2 = normalize(vec3(lightPosition2) - mvVertex);
        vec3 L3 = normalize(vec3(lightPosition3) - mvVertex);

        vec3 diffuse1 = lightColor1 * Kd * vec3(fragcolor) * max(dot(normal, L1), 0.0);
        vec3 diffuse2 = lightColor2 * Kd * vec3(fragcolor) * max(dot(normal, L2), 0.0);
        vec3 diffuse3 = lightColor3 * Kd * vec3(fragcolor) * max(dot(normal, L3), 0.0);
        vec3 Diffuse = diffuse1 + diffuse2 + diffuse3;


        /* specular */

        vec3 R1 = reflect(-L1, normal);
        vec3 R2 = reflect(-L2, normal);
        vec3 R3 = reflect(-L3, normal);
        vec3 V = normalize(-mvVertex);

        vec3 specular1 = lightColor1 * Ks * pow(max(dot(R1, V), 0.0), Shininess);
        vec3 specular2 = lightColor2 * Ks * pow(max(dot(R2, V), 0.0), Shininess);
        vec3 specular3 = lightColor3 * Ks * pow(max(dot(R3, V), 0.0), Shininess);
        vec3 Specular = specular1 + specular2 + specular3;

        vec3 color = Ambient + Diffuse + Specular;

        gl_FragColor = vec4(color,1.0);
    }
`
