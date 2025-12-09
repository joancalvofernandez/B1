let students = [ // Do not delete
	{
    	name : "Mary Smith",
    	grade : [
        	{subject: "math",
        	qualification : 82 },
        	{subject: "physics",
        	qualification : 77 }
    	]    
	},    
	{
    	name : "Jonh Kay",
    	grade : [
        	{subject: "math",
        	qualification : 90 },
        	{subject: "chemistry",
        	qualification : 89 },
    	]    
	},
	{
    	name : "Mike Burrows",
    	grade : [
        	{subject: "math",
        	qualification : 91 },
        	{subject: "chemistry",
        	qualification : 78 },
        	{subject: "physics",
        	qualification : 96 }
    	]    
	},
	{
    	name : "Ella Silva",
    	grade : [
        	{subject: "math",
        	qualification : 90 },
        	{subject: "chemistry",
        	qualification : 80 },
        	{subject: "physics",
        	qualification : 67 }
    	]    
	}
];

function subjectQualifications (students, subject) {
    // Escribe tu código aquí
    
}

// Pruebas:

console.log(subjectQualifications (students, "chemistry"));

/* Resultado esperado
// [object Array] (3)
[// [object Object] 
{
  "name": "Jonh Kay",
  "qualification": 89
},// [object Object] 
{
  "name": "Mike Burrows",
  "qualification": 78
},// [object Object] 
{
  "name": "Ella Silva",
  "qualification": 80
}]
 */
console.log(subjectQualifications (students, "math"));

/* Resultado esperado

// [object Array] (4)
[// [object Object] 
{
  "name": "Mary Smith",
  "qualification": 82
},// [object Object] 
{
  "name": "Jonh Kay",
  "qualification": 90
},// [object Object] 
{
  "name": "Mike Burrows",
  "qualification": 91
},// [object Object] 
{
  "name": "Ella Silva",
  "qualification": 90
}]


SOLUCIO 

let students = [ // Do not delete
	{
    	name : "Mary Smith",
    	grade : [
        	{subject: "math",
        	qualification : 82 },
        	{subject: "physics",
        	qualification : 77 }
    	]    
	},    
	{
    	name : "Jonh Kay",
    	grade : [
        	{subject: "math",
        	qualification : 90 },
        	{subject: "chemistry",
        	qualification : 89 },
    	]    
	},
	{
    	name : "Mike Burrows",
    	grade : [
        	{subject: "math",
        	qualification : 91 },
        	{subject: "chemistry",
        	qualification : 78 },
        	{subject: "physics",
        	qualification : 96 }
    	]    
	},
	{
    	name : "Ella Silva",
    	grade : [
        	{subject: "math",
        	qualification : 90 },
        	{subject: "chemistry",
        	qualification : 80 },
        	{subject: "physics",
        	qualification : 67 }
    	]    
	}
];

function subjectQualifications (students, subject) {
  
  let i = 0;
  let aux = new Array();
  // Recorremos la tabla de objetos 
  while (i<students.length){
  
    //console.log("i",i);
    let j = 0;
    //queremos recorrer el objeto grade dependiento de su tamaño en cada posición
    while (j<students[i].grade.length){
      
    	//console.log("j",j);
      
    	if (students[i].grade[j].subject == subject){  // Buscamos coincidencia de asignatura dentro del objeto
      
        //Almacenamos las coincidencias en tabla objetos nueva.
        
      	aux.push({
        
        	name: students[i].name,
          qualification: students[i].grade[j].qualification,
        
        });
        
        //console.log("tengo");
    
    	}
    
    j++;
      
    }
  
  	i++;	
  }
    
  return aux;
    
}

// Pruebas:

//console.log(subjectQualifications (students, "chemistry"));

/* Resultado esperado
// [object Array] (3)
[// [object Object] 
{
  "name": "Jonh Kay",
  "qualification": 89
},// [object Object] 
{
  "name": "Mike Burrows",
  "qualification": 78
},// [object Object] 
{
  "name": "Ella Silva",
  "qualification": 80
}]
 */
console.log(subjectQualifications (students, "math"));

/* Resultado esperado

// [object Array] (4)
[// [object Object] 
{
  "name": "Mary Smith",
  "qualification": 82
},// [object Object] 
{
  "name": "Jonh Kay",
  "qualification": 90
},// [object Object] 
{
  "name": "Mike Burrows",
  "qualification": 91
},// [object Object] 
{
  "name": "Ella Silva",
  "qualification": 90
}]
*/

//console.log(students[2].grade[0].subject);
//canvi al repositori