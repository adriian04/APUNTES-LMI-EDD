function verificaHora(hora) {
    if (hora >= 6 && hora <= 12) {
        console.log("Bon dia");
    } else if (hora >= 13 && hora <= 20) {
        console.log("Bona vesprada");
    } else {
        console.log("Bona nit");
    }
}
