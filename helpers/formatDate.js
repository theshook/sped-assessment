formatDate = date => {
    if (date !== undefined) {
        let OrigDate = new Date(date);
        return  OrigDate.getFullYear() + '-' +
                ((OrigDate.getDate() > 9) ? OrigDate.getDate() : ('0' + OrigDate.getDate())) + '-' +
                ((OrigDate.getMonth() > 8) ? (OrigDate.getMonth() + 1) : ('0' + (OrigDate.getMonth() + 1)));
    }    
};
  
module.exports = formatDate;
