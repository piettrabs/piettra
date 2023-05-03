let aviao = {
    ligado: false,
    velocidade: 0,
    velocidadeMaxima: 800,
    ligarAviao: function(){
        aviao.ligado = true
        console.log("Avião Ligado")
    },
    desligarAviao: function(){
        aviao.ligado = false
        console.log("Avião Desligado")
    },
    acelerar: function(){
        if(aviao.ligado && aviao.velocidade<aviao.velocidadeMaxima){
            aviao.velocidade += 10
            console.log("Velocidade atual "+aviao.velocidade)
            if(aviao.velocidade==200){
                console.log("Decolando".toUpperCase())
            }
            if(aviao.velocidade==300){
                console.log("Início do modo cruzeiro".toUpperCase())
            }
            if(aviao.velocidade==800){
                console.log("Velocidade Máxima".toUpperCase())
            }
            console.log("")
        }
    },
    desacelerar: function(){
        if(aviao.ligado && aviao.velocidade<=aviao.velocidadeMaxima){
            aviao.velocidade -= 10
            console.log("Velocidade atual "+aviao.velocidade)
            if(aviao.velocidade==200){
                console.log("Pousando".toUpperCase())
            }
            console.log("")
            if(aviao.velocidade==0){
                this.desligarAviao()
            }
        }
    }
}

aviao.ligarAviao()
for(i=0; i<=80; i++){
    aviao.acelerar()
}
for(i=0; i<=80; i++){
    aviao.desacelerar()
}