module.exports = function solveSudoku(matrix) {
  
  const sizeField = 9;
  const sizeLittleField = 3;
  
  function isEmpty(matrix){

      for(let i = 0; i < sizeField; i ++){
          for(let j = 0; j < sizeField; j ++){
              if (matrix[i][j] === 0) { return [i,j]; }
          }
      }
      return null;   
  }

  function isValidate(num,pos,matrix){
      const [row, col] = pos;

      for(let i = 0; i < sizeField; i ++){
          if(matrix[row][i] === num && i !== col) { return false;}                
      }

      for(let i = 0; i < sizeField; i ++){
          if(matrix[i][col] === num && i !== row) { return false;}                
      }
      const littleFieldX = Math.floor( row / sizeLittleField ) * sizeLittleField;
      const littleFieldY = Math.floor( col / sizeLittleField ) * sizeLittleField;

      for(let i = littleFieldX; i < littleFieldX + sizeLittleField; i ++){
          for(let j = littleFieldY; j < littleFieldY + sizeLittleField; j ++){
              if(matrix[i][j] === num && i !== row && j !== col) { return false;}                                      
          }
      }
       
      return true;
  }

  function solve(){

      const currentPos = isEmpty(matrix);
      if( currentPos === null) { return true; }

      for(let i = 1; i <= sizeField; i ++){
          const num = i;
          if(isValidate(num,currentPos,matrix)){
              const[row,col] = currentPos;
              matrix[row][col] = num; 
          if(solve()) { return true; }          
              matrix[row][col] = 0;                 
          }                             
      }
     return false;
  }
  solve();
  return matrix;
}
