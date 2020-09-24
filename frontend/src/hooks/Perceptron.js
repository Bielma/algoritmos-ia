

class  Perceptron {
  
    constructor(size, lr, it){
		this.w  = [];
		this.learningRate=  lr || 0.01;
        this.iterations =  it || 10;
            
        
        for(var i = 0; i<size+1  ; i++){
            this.w[i] = Math.random() * (5 - (-5)) + (-5);
        }
        console.log(this.w);
	}

   

    fit = (inputs, outputs) =>{
   
        const x = inputs || [
            [5, 3, 2],
            [4, 1, 3],
            [3, 2, 3],
            [3, 3, 3]
        ];
        const y = outputs || [0,0,1,1];

    
        var done = false;    
        var error = 0;
        var epoca = 0;
        

        while(done === false){
            done = true;
            //Epocas            

            console.log("Epoca: ", epoca+1);

            for(var j = 0; j<x.length; j++){
                error = y[j] - this.predict(x[j]);
                console.log("Error: ",error );
                if(error!=0){
                    done = false;                    
                    console.log("Ajustando w");
                    for(let k=0;  k< x[j].length; k++){
                        console.log("Antes del ajuste: w: %f, lr: %f, error: %d", this.w[k+1], this.learningRate, error);
                        this.w[k+1] += this.learningRate * error * x[j][k];
                        console.log("Despues: w: %f ", this.w[k+1]);
                    }
                    
                }
            }
            epoca += 1;   
            if(epoca >=this.iterations){
                break;
            } 
        }

    }

    predict = (inputs) => {
            let suma = this.w[0];         
            for(var i = 0; i < inputs.length; i++){
                suma += this.w[i+1] * inputs[i];               
            }
            //console.log("Suma: ", activation);
            const activation = suma  >= 0 ? 1 : 0;            
            return activation;
            
        }
      

    
}
export default Perceptron;