var Common = {
    //category
    incomeCategory: {'salary':'월급', 'pinmoney':'용돈'},
    expendCategory: {'food':'음식', 'cloth':'옷', 'game':'게임'},

    'fget_DateFormat' : function(date, format){
        var dateString = "";
        var year = date.getFullYear();
        var month = (date.getMonth() >= 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1));
        var day = (date.getDate() >= 10 ? date.getDate() : '0' + date.getDate());
        var formatYear = format;

        if(format.indexOf('yyyy') != -1) {
            formatYear.replace('yyyy',year);
        } else if (format.indexOf('yy') != -1) {
            formatYear.replace('yy',year.substr(0,2));
        }
        if(format.indexOf('MM') != -1) {
            formatYear.replace('MM',month);
        }
        if(format.indexOf('dd') != -1) {
            formatYear.replace('dd',day);
        }
        
        switch (format) {
            case 'year':
                dateString = year;
                break;
            case 'month':
                dateString = year + '-' + month;
                break;
            case 'day':
                dateString = year + '-' + month + '-' + day;
                break;
        }
        return dateString;
    },
    'fget_AccountToStorage' :function(){
        var account;

        if( localStorage.getItem('account') === null ) { account = {'member' : [], 'income':[], 'expend':[]}; }
        else { account = JSON.parse(localStorage.getItem('account')) }

        return account;
    }
}
export default () => {
    return Common;
  }