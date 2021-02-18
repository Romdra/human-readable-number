module.exports = function toReadable (num) { 
  if( num === 0) return 'zero';

  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teen = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const ty = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

let out = '';
const ln = (''+num).length;

  (''+num).split('').forEach((v,i,ar)=>{
    const vnum = parseInt(v);

    if(ln-i === 3 && vnum ) out += ones[vnum] + ' hundred';
    if(ln-i === 2 && vnum > 1 ) out += ' '+ty[vnum];

    if(ln-i === 1) {
      out += ' ';
      if( ln > 1 && ar[i-1] === '1') out += teen[vnum];
      else out += ones[vnum];
    }

  });

  return out.trim();
}
