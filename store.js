const crypto = require('crypto')
const knex = require('knex')(require('./knexfile'))
//M::M M M: :M:M M ^ M::M M M: :M:M M ^ M::M M M: :M:M M ^ M::M M M: :M:M M ^ M::M M M: :M:M M ^
module.exports = {

  getWordFrom(data){
    return knex.raw(`call getWord('${data.text}',${data.fetchType})`)
     .then(function(result) {
       //console.log('getWord result::',result);
       var j=result[0][0];
       if(j.length===0){
         j=[{word:data.text + ' is not a word',definition:''}];
       }
       //console.log('RETURNS getJokeFrom::',j,j.length);
         return j;
      });
    }

};

