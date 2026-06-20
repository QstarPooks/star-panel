declare const console: any;

// .gg/xKFA4WGeHD
// IL2CPP export symbols are hardcoded inside frida-il2cpp-bridge.js (the r("...") call
// sites); the $config.exports blocks are inert. To update for a new game version,
// patch the names in frida-il2cpp-bridge.js.

// Gradient-blue "Fixed By Qstar" banner.
const _qText = "Fixed By Qstar";
let _qOut = "";
for (let _i = 0; _i < _qText.length; _i++) {
    const _t = _qText.length > 1 ? _i / (_qText.length - 1) : 0;
    const _r = Math.round(120 + (0 - 120) * _t);   // 120 -> 0
    const _g = Math.round(210 + (90 - 210) * _t);  // 210 -> 90
    const _b = 255;                                // stay full blue
    _qOut += "\x1b[1m\x1b[38;2;" + _r + ";" + _g + ";" + _b + "m" + _qText.charAt(_i);
}
_qOut += "\x1b[0m";
console.log(_qOut);
