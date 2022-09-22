export const flatVertex:string = `

    #extension GL_OES_standard_derivatives : enable

    attribute vec3 aVertexPosition;
    attribute vec3 aVertexColor;
    attribute vec3 aVertexNormal;

    uniform mat4 mvMatrix; // model view
    uniform mat4 pMatrix; // projection

    varying vec4 fragcolor;
    varying vec3 mvVertex;
    varying vec3 normal;

    void main(void) {
        mvVertex = (mvMatrix * vec4(aVertexPosition,1.0)).xyz;
        gl_Position = pMatrix * mvMatrix * vec4(aVertexPosition, 1.0);
        fragcolor = vec4(aVertexColor.rgb, 1.0);
        normal = normalize(mat3(mvMatrix) * aVertexNormal);
    }
`

export const flatFragment:string = `

    // to use dFdx and dFdy
    #extension GL_OES_standard_derivatives : enable
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
    varying vec3 mvVertex;

    void main(void) {

        /* ambient */
        vec3 Ambient = lightColor1 * Ka * vec3(fragcolor);

        /* diffuse */
        vec3 dx = dFdx(mvVertex);
        vec3 dy = dFdy(mvVertex);
        vec3 N = normalize(cross(dx,dy));

        vec3 L1 = normalize(vec3(lightPosition1) - mvVertex);
        vec3 L2 = normalize(vec3(lightPosition2) - mvVertex);
        vec3 L3 = normalize(vec3(lightPosition3) - mvVertex);

        vec3 diffuse1 = lightColor1 * Kd * vec3(fragcolor) * max(dot(L1,N), 0.0);
        vec3 diffuse2 = lightColor2 * Kd * vec3(fragcolor) * max(dot(L2,N), 0.0);
        vec3 diffuse3 = lightColor3 * Kd * vec3(fragcolor) * max(dot(L3,N), 0.0);
        vec3 Diffuse = diffuse1 + diffuse2 + diffuse3;

        /* specular */
        vec3 H1 = reflect(-L1, N);
        vec3 H2 = reflect(-L2, N);
        vec3 H3 = reflect(-L3, N);
        vec3 V = normalize(-mvVertex);

        vec3 specular1 = lightColor1 * Ks * pow(max(dot(H1,V), 0.0), Shininess);
        vec3 specular2 = lightColor2 * Ks * pow(max(dot(H2,V), 0.0), Shininess);
        vec3 specular3 = lightColor3 * Ks * pow(max(dot(H3,V), 0.0), Shininess);

        vec3 Specular = specular1 + specular2 + specular3;

        vec3 color = Ambient +  Diffuse + Specular;
        gl_FragColor = vec4(color, 1.0);
    }
`