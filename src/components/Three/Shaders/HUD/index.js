export const vert = `
precision highp float;

varying vec2 vUv;
varying vec3 vPosition;

void main() {

    vPosition = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

export const frag = `
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uBgColor;
uniform float uRatio;
uniform vec3 uFgColor;
uniform sampler2D uTexture;
uniform float uSlider;

varying vec2 vUv;
varying vec3 vPosition;

//random hash
vec4 hash42(vec2 p){
    
	vec4 p4 = fract(vec4(p.xyxy) * vec4(443.8975,397.2973, 491.1871, 470.7827));
    p4 += dot(p4.wzxy, p4+19.19);
    return fract(vec4(p4.x * p4.y, p4.x*p4.z, p4.y*p4.w, p4.x*p4.w));
}

float hash( float n ){
    return fract(sin(n)*43758.5453123);
}

// 3d noise function (iq's)
float n( in vec3 x ){
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float n = p.x + p.y*57.0 + 113.0*p.z;
    float res = mix(mix(mix( hash(n+  0.0), hash(n+  1.0),f.x),
                        mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y),
                    mix(mix( hash(n+113.0), hash(n+114.0),f.x),
                        mix( hash(n+170.0), hash(n+171.0),f.x),f.y),f.z);
    return res;
}

//tape noise
float nn(vec2 p){

    float y = p.y;
    float s = uTime * (uSlider / 50. + 2.);
    
    float v = (n( vec3(y*.01 +s, 			1., 1.0) ) + .0)
          	 *(n( vec3(y*.011+1000.0+s, 	1., 1.0) ) + .0) 
          	 *(n( vec3(y*.51+421.0+s, 	1., 1.0) ) + .0)   
        ;
    //v*= n( vec3( (fragCoord.xy + vec2(s,0.))*100.,1.0) );
   	v*= hash42(   vec2(p.x +uTime*0.01, p.y) ).x +.3 ;

    
    v = pow(v+.3, 1.);
	if(v<.7) v = 0.;  //threshold
    return v;
}

void main() {

    vec2 uv = vUv;
    
	vec4 txt = texture2D(uTexture, uv);
    vec3 col = uBgColor;


    float linesN = 240.; //fields per seconds
    float one_y = uResolution.y / linesN; //field line
    uv = floor(uv*uResolution.xy/one_y)*one_y;

	float staticlines = nn(uv);
    
    // Base
    if (uBgColor == vec3(.8, .8, .8)) {
        col -= vec3(clamp(staticlines, 0., .4));
    }

    // Reactor
    if (uBgColor == vec3(.125, .125, .125)) {
        col.x += clamp(staticlines, 0., .7);
    }

    // Portal
    if (uBgColor == vec3(.149, .149, .149)) {
        col.x += staticlines;
        col.z += clamp(staticlines, 0., .9);
    }

    // Terminal
    if (uBgColor == vec3(.124, .124, .124)) {
        col.x += clamp(staticlines, 0., .577);
        col.y += clamp(staticlines, 0., .628);
        col.z += clamp(staticlines, 0., .9);
    }

    // Acid
    if (uBgColor == vec3(0.56, 0, 1)) {
        col.x += clamp(staticlines, 0., .05);
        col.y += staticlines;
        col.z -= staticlines;
    }
    
    gl_FragColor = vec4(col, .8);
}
`
