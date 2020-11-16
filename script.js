(function () {
    var names = ["Ivo", "Andre", "Rui", "Eduardo", "Ana", "Joana", "Ines", "Paula", "Andreia", "Joao"];
    var length = names.length;
    for (var i = 0; i < length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if ("j" === firstLetter) {
            byeSpeaker.speak(names[i])
        } else {
            helloSpeaker.speak(names[i])
        }
    }
})();