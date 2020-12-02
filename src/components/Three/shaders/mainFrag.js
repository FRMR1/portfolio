export const mainFrag = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_ratio;
uniform vec2 u_mouse;
uniform float u_time;
uniform int u_n1;
uniform int u_n2;
uniform float u_bw1;
uniform float u_bw2;
uniform sampler2D u_noise;

varying vec2 v_uv;
varying vec3 v_position;


float character(int n, vec2 p) {
	p = floor(p*vec2(4.0, -4.0) + 2.5);
    if (clamp(p.x, 0.0, 4.0) == p.x)
	{
        if (clamp(p.y, 0.0, 4.0) == p.y)
		{
        	int a = int(round(p.x) + 5.0 * round(p.y));
			if (((n >> a) & 1) == 1) return u_bw1;
		}
    }
	return u_bw2;
}

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {

    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
	uv *= u_resolution.xy/u_resolution.xy;

    vec4 col = texture2D(u_noise, uv);
    uv = gl_FragCoord.xy;

    float gray = col.x;

    int n = u_n1;
	if (gray > 0.5) n = u_n2;

	vec2 p = mod(uv/4.0, 2.0) - vec2(1.0);
	col.xyz = gray*vec3(character(n, p));
	if (u_bw1 != 0.99) col.xyz = vec3(character(n, p));

	// Terminal theme
	if (u_bw1 == 1.0 && col.x == 1.0) col.xyz = vec3(0.204, 0.522, 0.141);
	// if (u_bw1 == 1.0 && col.x == 0.0) col.xyz = vec3(0.404, 0.622, 0.441);

	// Acid theme
	// if (u_bw1 == 0.99) col.xyz = 1. - col.xyz;
	if (u_bw1 == 0.99) col.xyz += vec3(abs(sin(u_time / 2.4)) + gl_FragCoord.x / u_resolution.x, 0., abs(cos(u_time / 2.)) + gl_FragCoord.y / u_resolution.y);

	gl_FragColor = vec4(col.xyz, 1.0);

}
`
