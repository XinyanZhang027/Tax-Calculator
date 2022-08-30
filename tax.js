function a(){
    var aa = document.getElementById('before_tax').value
    function BC(aa){
        //联邦税
        
        if(aa<=50197){
            tax1=aa*0.15;
        }
        else if(aa<=100392){
            tax1=50197*0.15+(aa-50197)*0.205
        }
        else if(aa<=155625){
            tax1=50197*0.15+(100392-50197)*0.205+(aa-100392)*0.26
        }
        else if(aa<=221708){
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(aa-155625)*0.29
        }
        else {
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(221708-155625)*0.29+(aa-221708)*0.33
        }

        //BC省税
        
        if(aa <= 43070){
            tax2=aa*0.0506;
        }
        else if(aa<=86141){
            tax2=43070*0.0506+(aa-43070)*0.077
        }
        else if(aa<=98901){
            tax2=43070*0.0506+(86141-43070)*0.077+(aa-86141)*0.105
        }
        else if(aa<=120094){
            tax2=43070*0.0506+(86141-43070)*0.077+(98901-86141)*0.105+(aa-98901)*0.1229
        }
        else if(aa<=162832){
            tax2=43070*0.0506+(86141-43070)*0.077+(98901-86141)*0.105+(120094-98901)*0.1229+(aa-120094)*0.147
        }
        else if(aa<=227091){
            tax2=43070*0.0506+(86141-43070)*0.077+(98901-86141)*0.105+(120094-98901)*0.1229+(162832-120094)*0.147+(aa-162832)*0.168
        }
        else {
            tax2=43070*0.0506+(86141-43070)*0.077+(98901-86141)*0.105+(120094-98901)*0.1229+(162832-120094)*0.147+(227091-162832)*0.168+(aa-227091)*0.205
        }
        tax = tax1 + tax2;
        return{
            income_after: '$'+(aa-tax).toFixed(2),
            total_tax_rate: (tax/aa*100).toFixed(2)+'%',
            fed_tax_rate: (tax1/aa*100).toFixed(2)+'%',
            prov_tax_rate: (tax2/aa*100).toFixed(2)+'%'


        }
        
    }



    function ON(aa){
        //联邦税
        if(aa<=50197){
            tax1=aa*0.15;
        }
        else if(aa<=100392){
            tax1=50197*0.15+(aa-50197)*0.205
        }
        else if(aa<=155625){
            tax1=50197*0.15+(100392-50197)*0.205+(aa-100392)*0.26
        }
        else if(aa<=221708){
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(aa-155625)*0.29
        }
        else {
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(221708-155625)*0.29+(aa-221708)*0.33
        }

        //ON省税
        if(aa <= 46226){
            tax2=aa*0.0505;
        }
        else if(aa<=92454){
            tax2=46226*0.0505+(aa-46226)*0.0905
        }
        else if(aa<=150000){
            tax2=46226*0.0505+(92454-46226)*0.0905+(aa-92454)*0.1116
        }
        else if(aa<=220000){
            tax2=46226*0.0505+(92454-46226)*0.0905+(150000-92454)*0.1116+(aa-150000)*0.1216
        }
        else {
            tax2=46226*0.0505+(92454-46226)*0.0905+(150000-92454)*0.1116+(220000-150000)*0.1216+(aa-220000)*0.1316
        }
        
        tax = tax1 + tax2;
        return{
            income_after: '$'+(aa-tax).toFixed(2),
            total_tax_rate: (tax/aa*100).toFixed(2)+'%',
            fed_tax_rate: (tax1/aa*100).toFixed(2)+'%',
            prov_tax_rate: (tax2/aa*100).toFixed(2)+'%'


        }
    }


    function MB(aa){
        //联邦税
        if(aa<=50197){
            tax1=aa*0.15;
        }
        else if(aa<=100392){
            tax1=50197*0.15+(aa-50197)*0.205
        }
        else if(aa<=155625){
            tax1=50197*0.15+(100392-50197)*0.205+(aa-100392)*0.26
        }
        else if(aa<=221708){
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(aa-155625)*0.29
        }
        else {
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(221708-155625)*0.29+(aa-221708)*0.33
        }

        //MB省税
        if(aa <= 34431){
            tax2=aa*0.108;
        }
        else if(aa<=74416){
            tax2=34431*0.108+(aa-34431)*0.1275
        }
        else {
            tax2=34431*0.108+(74416-34431)*0.1275+(aa-74416)*0.174
        }
        
        
        tax = tax1 + tax2;
        return{
            income_after: '$'+(aa-tax).toFixed(2),
            total_tax_rate: (tax/aa*100).toFixed(2)+'%',
            fed_tax_rate: (tax1/aa*100).toFixed(2)+'%',
            prov_tax_rate: (tax2/aa*100).toFixed(2)+'%'


        }
    }


    function AB(aa){
        //联邦税
        if(aa<=50197){
            tax1=aa*0.15;
        }
        else if(aa<=100392){
            tax1=50197*0.15+(aa-50197)*0.205
        }
        else if(aa<=155625){
            tax1=50197*0.15+(100392-50197)*0.205+(aa-100392)*0.26
        }
        else if(aa<=221708){
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(aa-155625)*0.29
        }
        else {
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(221708-155625)*0.29+(aa-221708)*0.33
        }

        //AB省税
        if(aa <= 131220){
            tax2=aa*0.1;
        }
        else if(aa<=157464){
            tax2=131220*0.1+(aa-131220)*0.12
        }
        else if(aa<=209952){
            tax2=131220*0.1+(157464-131220)*0.12+(aa-157464)*0.13
        }
        else if(aa<=314928){
            tax2=131220*0.1+(157464-131220)*0.12+(209952-157464)*0.13+(aa-209952)*0.14
        }
        else {
            tax2=131220*0.1+(157464-131220)*0.12+(209952-157464)*0.13+(314928-209952)*0.14+(aa-314928)*0.15
        }
        
        tax = tax1 + tax2;
        return{
            income_after: '$'+(aa-tax).toFixed(2),
            total_tax_rate: (tax/aa*100).toFixed(2)+'%',
            fed_tax_rate: (tax1/aa*100).toFixed(2)+'%',
            prov_tax_rate: (tax2/aa*100).toFixed(2)+'%'


        }
    }


    function SK(aa){
        //联邦税
        if(aa<=50197){
            tax1=aa*0.15;
        }
        else if(aa<=100392){
            tax1=50197*0.15+(aa-50197)*0.205
        }
        else if(aa<=155625){
            tax1=50197*0.15+(100392-50197)*0.205+(aa-100392)*0.26
        }
        else if(aa<=221708){
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(aa-155625)*0.29
        }
        else {
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(221708-155625)*0.29+(aa-221708)*0.33
        }

        //SK省税
        if(aa <= 46773){
            tax2=aa*0.105;
        }
        else if(aa<=133638){
            tax2=46773*0.105+(aa-46773)*0.125
        }
        else {
            tax2=46773*0.105+(133638-46773)*0.125+(aa-133638)*0.145
        }
       
        
        tax = tax1 + tax2;
        return{
            income_after: '$'+(aa-tax).toFixed(2),
            total_tax_rate: (tax/aa*100).toFixed(2)+'%',
            fed_tax_rate: (tax1/aa*100).toFixed(2)+'%',
            prov_tax_rate: (tax2/aa*100).toFixed(2)+'%'


        }
    }


    function QC(aa){
        //联邦税
        if(aa<=50197){
            tax1=aa*0.15;
        }
        else if(aa<=100392){
            tax1=50197*0.15+(aa-50197)*0.205
        }
        else if(aa<=155625){
            tax1=50197*0.15+(100392-50197)*0.205+(aa-100392)*0.26
        }
        else if(aa<=221708){
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(aa-155625)*0.29
        }
        else {
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(221708-155625)*0.29+(aa-221708)*0.33
        }

        //QC省税
        if(aa <= 45105){
            tax2=aa*0.15;
        }
        else if(aa<=90200){
            tax2=45105*0.15+(aa-45105)*0.2
        }
        else if(aa<=109755){
            tax2=45105*0.15+(90200-45105)*0.2+(aa-90200)*0.24
        }
        else {
            tax2=45105*0.15+(90200-45105)*0.2+(109755-90200)*0.24+(aa-109755)*0.2575
        }
        
        tax = tax1 + tax2;
        return{
            income_after: '$'+(aa-tax).toFixed(2),
            total_tax_rate: (tax/aa*100).toFixed(2)+'%',
            fed_tax_rate: (tax1/aa*100).toFixed(2)+'%',
            prov_tax_rate: (tax2/aa*100).toFixed(2)+'%'


        }
    }


    function NS(aa){
        //联邦税
        if(aa<=50197){
            tax1=aa*0.15;
        }
        else if(aa<=100392){
            tax1=50197*0.15+(aa-50197)*0.205
        }
        else if(aa<=155625){
            tax1=50197*0.15+(100392-50197)*0.205+(aa-100392)*0.26
        }
        else if(aa<=221708){
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(aa-155625)*0.29
        }
        else {
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(221708-155625)*0.29+(aa-221708)*0.33
        }

        //NS省税
        if(aa <= 29590){
            tax2=aa*0.0879;
        }
        else if(aa<=59180){
            tax2=29590*0.089+(aa-29590)*0.1495
        }
        else if(aa<=93000){
            tax2=29590*0.089+(59180-29590)*0.1495+(aa-59180)*0.1667
        }
        else if(aa<=150000){
            tax2=29590*0.089+(59180-29590)*0.1495+(93000-59180)*0.1667+(aa-93000)*0.175
        }
        else {
            tax2=29590*0.089+(59180-29590)*0.1495+(93000-59180)*0.1667+(150000-93000)*0.175+(aa-150000)*0.21
        }
        
        tax = tax1 + tax2;
        return{
            income_after: '$'+(aa-tax).toFixed(2),
            total_tax_rate: (tax/aa*100).toFixed(2)+'%',
            fed_tax_rate: (tax1/aa*100).toFixed(2)+'%',
            prov_tax_rate: (tax2/aa*100).toFixed(2)+'%'


        }
    }


    function NB(aa){
        //联邦税
        if(aa<=50197){
            tax1=aa*0.15;
        }
        else if(aa<=100392){
            tax1=50197*0.15+(aa-50197)*0.205
        }
        else if(aa<=155625){
            tax1=50197*0.15+(100392-50197)*0.205+(aa-100392)*0.26
        }
        else if(aa<=221708){
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(aa-155625)*0.29
        }
        else {
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(221708-155625)*0.29+(aa-221708)*0.33
        }

        //NB省税
        if(aa <= 44887){
            tax2=aa*0.094;
        }
        else if(aa<=89775){
            tax2=44887*0.094+(aa-44887)*0.1482
        }
        else if(aa<=145955){
            tax2=44887*0.094+(89775-44887)*0.1482+(aa-89775)*0.1652
        }
        else if(aa<=166280){
            tax2=44887*0.094+(89775-44887)*0.1482+(145955-89775)*0.1652+(aa-145955)*0.1784
        }
        else {
            tax2=44887*0.094+(89775-44887)*0.1482+(145955-89775)*0.1652+(166280-145955)*0.1784+(aa-166280)*0.203
        }
        
        tax = tax1 + tax2;
        return{
            income_after: '$'+(aa-tax).toFixed(2),
            total_tax_rate: (tax/aa*100).toFixed(2)+'%',
            fed_tax_rate: (tax1/aa*100).toFixed(2)+'%',
            prov_tax_rate: (tax2/aa*100).toFixed(2)+'%'


        }
    }


    function PE(aa){
        //联邦税
        if(aa<=50197){
            tax1=aa*0.15;
        }
        else if(aa<=100392){
            tax1=50197*0.15+(aa-50197)*0.205
        }
        else if(aa<=155625){
            tax1=50197*0.15+(100392-50197)*0.205+(aa-100392)*0.26
        }
        else if(aa<=221708){
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(aa-155625)*0.29
        }
        else {
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(221708-155625)*0.29+(aa-221708)*0.33
        }

        //PE省税
        if(aa <= 31984){
            tax2=aa*0.098;
        }
        else if(aa<=63969){
            tax2=31984*0.098+(aa-31984)*0.138
        }
        else {
            tax2=31984*0.098+(63969-31984)*0.138+(aa-63969)*0.167
        }
        
        tax = tax1 + tax2;
        return{
            income_after: '$'+(aa-tax).toFixed(2),
            total_tax_rate: (tax/aa*100).toFixed(2)+'%',
            fed_tax_rate: (tax1/aa*100).toFixed(2)+'%',
            prov_tax_rate: (tax2/aa*100).toFixed(2)+'%'


        }
    }


    function NL(aa){
        //联邦税
        if(aa<=50197){
            tax1=aa*0.15;
        }
        else if(aa<=100392){
            tax1=50197*0.15+(aa-50197)*0.205
        }
        else if(aa<=155625){
            tax1=50197*0.15+(100392-50197)*0.205+(aa-100392)*0.26
        }
        else if(aa<=221708){
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(aa-155625)*0.29
        }
        else {
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(221708-155625)*0.29+(aa-221708)*0.33
        }

        //NL省税
        if(aa <= 39147){
            tax2=aa*0.087;
        }
        else if(aa<=78294){
            tax2=39147*0.087+(aa-39147)*0.145
        }
        else if(aa<=139780){
            tax2=39147*0.087+(78294-39147)*0.145+(aa-78294)*0.158
        }
        else if(aa<=195693){
            tax2=39147*0.087+(78294-39147)*0.145+(139780-78294)*0.158+(aa-139780)*0.178
        }
        else if(aa<=250000) {
            tax2=39147*0.087+(78294-39147)*0.145+(139780-78294)*0.158+(195693-139780)*0.178+(aa-195693)*0.198
        }
        else if(aa<=500000){
            tax2=39147*0.087+(78294-39147)*0.145+(139780-78294)*0.158+(195693-139780)*0.178+(250000-195693)*0.198+(aa-250000)*0.208
        }
        else if(aa<=1000000){
            tax2=39147*0.087+(78294-39147)*0.145+(139780-78294)*0.158+(195693-139780)*0.178+(250000-195693)*0.198+(500000-250000)*0.208+(aa-500000)*0.213
        }
        else{
            tax2=39147*0.087+(78294-39147)*0.145+(139780-78294)*0.158+(195693-139780)*0.178+(250000-195693)*0.198+(500000-250000)*0.208+(1000000-500000)*0.213+(aa-1000000)*0.218
        }
        
        tax = tax1 + tax2;
        return{
            income_after: '$'+(aa-tax).toFixed(2),
            total_tax_rate: (tax/aa*100).toFixed(2)+'%',
            fed_tax_rate: (tax1/aa*100).toFixed(2)+'%',
            prov_tax_rate: (tax2/aa*100).toFixed(2)+'%'


        }
    }


    function YT(aa){
        //联邦税
        if(aa<=50197){
            tax1=aa*0.15;
        }
        else if(aa<=100392){
            tax1=50197*0.15+(aa-50197)*0.205
        }
        else if(aa<=155625){
            tax1=50197*0.15+(100392-50197)*0.205+(aa-100392)*0.26
        }
        else if(aa<=221708){
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(aa-155625)*0.29
        }
        else {
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(221708-155625)*0.29+(aa-221708)*0.33
        }

        //YT省税
        if(aa <= 50197){
            tax2=aa*0.064;
        }
        else if(aa<=100392){
            tax2=50197*0.064+(aa-50197)*0.09
        }
        else if(aa<=155625){
            tax2=50197*0.064+(100392-50197)*0.09+(aa-100392)*0.109
        }
        else if(aa<=500000){
            tax2=50197*0.064+(100392-50197)*0.09+(155625-100392)*0.109+(aa-155625)*0.128
        }
        else {
            tax2=50197*0.064+(100392-50197)*0.09+(155625-100392)*0.109+(500000-155625)*0.128+(aa-500000)*0.15
        }
        
        tax = tax1 + tax2;
        return{
            income_after: '$'+(aa-tax).toFixed(2),
            total_tax_rate: (tax/aa*100).toFixed(2)+'%',
            fed_tax_rate: (tax1/aa*100).toFixed(2)+'%',
            prov_tax_rate: (tax2/aa*100).toFixed(2)+'%'


        }
    }


    function NT(aa){
        //联邦税
        if(aa<=50197){
            tax1=aa*0.15;
        }
        else if(aa<=100392){
            tax1=50197*0.15+(aa-50197)*0.205
        }
        else if(aa<=155625){
            tax1=50197*0.15+(100392-50197)*0.205+(aa-100392)*0.26
        }
        else if(aa<=221708){
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(aa-155625)*0.29
        }
        else {
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(221708-155625)*0.29+(aa-221708)*0.33
        }

        //NT省税
        if(aa <= 45462){
            tax2=aa*0.059;
        }
        else if(aa<=90927){
            tax2=45462*0.059+(aa-45462)*0.086
        }
        else if(aa<=147826){
            tax2=45462*0.059+(90927-45462)*0.086+(aa-90927)*0.122
        }
        else {
            tax2=45462*0.059+(90927-45462)*0.086+(147826-90927)*0.122+(aa-147826)*0.1405
        }
        
        
        tax = tax1 + tax2;
        return{
            income_after: '$'+(aa-tax).toFixed(2),
            total_tax_rate: (tax/aa*100).toFixed(2)+'%',
            fed_tax_rate: (tax1/aa*100).toFixed(2)+'%',
            prov_tax_rate: (tax2/aa*100).toFixed(2)+'%'


        }
    }


    function NU(aa){
        //联邦税
        if(aa<=50197){
            tax1=aa*0.15;
        }
        else if(aa<=100392){
            tax1=50197*0.15+(aa-50197)*0.205
        }
        else if(aa<=155625){
            tax1=50197*0.15+(100392-50197)*0.205+(aa-100392)*0.26
        }
        else if(aa<=221708){
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(aa-155625)*0.29
        }
        else {
            tax1=50197*0.15+(100392-50197)*0.205+(155625-100392)*0.26+(221708-155625)*0.29+(aa-221708)*0.33
        }

        //NU省税
        if(aa <= 47862){
            tax2=aa*0.04;
        }
        else if(aa<=95724){
            tax2=47862*0.04+(aa-47862)*0.07
        }
        else if(aa<=155625){
            tax2=47862*0.04+(95724-47862)*0.07+(aa-95724)*0.09
        }
        else {
            tax2=47862*0.04+(95724-47862)*0.07+(155625-95724)*0.09+(aa-155625)*0.115
        }
        
        tax = tax1 + tax2;
        return{
            income_after: '$'+(aa-tax).toFixed(2),
            total_tax_rate: (tax/aa*100).toFixed(2)+'%',
            fed_tax_rate: (tax1/aa*100).toFixed(2)+'%',
            prov_tax_rate: (tax2/aa*100).toFixed(2)+'%'


        }
    }


    
    

    var myselect=document.getElementById("province");
    var index=myselect.selectedIndex;
    var value=myselect.options[index].value;

    //var mytable = document.getElementById("tax_table");
    //var af_tax = mytable.rows[0].cells[1].innerHTML
    //var tol_tax = mytable.rows[1].cells[1].innerHTML
    //var fed_tax = mytable.rows[2].cells[1].innerHTML
    //var pro_tax = mytable.rows[3].cells[1].innerHTML

    if(value=='BC'){
        //document.getElementById('after_tax').value = BC(aa).income_after
        document.getElementById("tax_table").rows[0].cells[1].innerText=BC(aa).income_after
        document.getElementById("tax_table").rows[1].cells[1].innerText=BC(aa).total_tax_rate
        document.getElementById("tax_table").rows[2].cells[1].innerText=BC(aa).fed_tax_rate
        document.getElementById("tax_table").rows[3].cells[1].innerText=BC(aa).prov_tax_rate
    
    }
    else if(value=='ON'){
        //document.getElementById('after_tax').value = ON(aa).income_after
        document.getElementById("tax_table").rows[0].cells[1].innerText=ON(aa).income_after
        document.getElementById("tax_table").rows[1].cells[1].innerText=ON(aa).total_tax_rate
        document.getElementById("tax_table").rows[2].cells[1].innerText=ON(aa).fed_tax_rate
        document.getElementById("tax_table").rows[3].cells[1].innerText=ON(aa).prov_tax_rate
    }
    else if(value=='MB'){
        //document.getElementById('after_tax').value = MB(aa).income_after
        document.getElementById("tax_table").rows[0].cells[1].innerText=MB(aa).income_after
        document.getElementById("tax_table").rows[1].cells[1].innerText=MB(aa).total_tax_rate
        document.getElementById("tax_table").rows[2].cells[1].innerText=MB(aa).fed_tax_rate
        document.getElementById("tax_table").rows[3].cells[1].innerText=MB(aa).prov_tax_rate
    }
    else if(value=='AB'){
        //document.getElementById('after_tax').value = AB(aa).income_after
        document.getElementById("tax_table").rows[0].cells[1].innerText=AB(aa).income_after
        document.getElementById("tax_table").rows[1].cells[1].innerText=AB(aa).total_tax_rate
        document.getElementById("tax_table").rows[2].cells[1].innerText=AB(aa).fed_tax_rate
        document.getElementById("tax_table").rows[3].cells[1].innerText=AB(aa).prov_tax_rate
    }
    else if(value=='SK'){
        //document.getElementById('after_tax').value = SK(aa).income_after
        document.getElementById("tax_table").rows[0].cells[1].innerText=SK(aa).income_after
        document.getElementById("tax_table").rows[1].cells[1].innerText=SK(aa).total_tax_rate
        document.getElementById("tax_table").rows[2].cells[1].innerText=SK(aa).fed_tax_rate
        document.getElementById("tax_table").rows[3].cells[1].innerText=SK(aa).prov_tax_rate
    }
    else if(value=='QC'){
        //document.getElementById('after_tax').value = QC(aa).income_after
        document.getElementById("tax_table").rows[0].cells[1].innerText=QC(aa).income_after
        document.getElementById("tax_table").rows[1].cells[1].innerText=QC(aa).total_tax_rate
        document.getElementById("tax_table").rows[2].cells[1].innerText=QC(aa).fed_tax_rate
        document.getElementById("tax_table").rows[3].cells[1].innerText=QC(aa).prov_tax_rate
    }
    else if(value=='NS'){
        //document.getElementById('after_tax').value = NS(aa).income_after
        document.getElementById("tax_table").rows[0].cells[1].innerText=NS(aa).income_after
        document.getElementById("tax_table").rows[1].cells[1].innerText=NS(aa).total_tax_rate
        document.getElementById("tax_table").rows[2].cells[1].innerText=NS(aa).fed_tax_rate
        document.getElementById("tax_table").rows[3].cells[1].innerText=NS(aa).prov_tax_rate
    }
    else if(value=='NB'){
        //document.getElementById('after_tax').value = NB(aa).income_after
        document.getElementById("tax_table").rows[0].cells[1].innerText=NB(aa).income_after
        document.getElementById("tax_table").rows[1].cells[1].innerText=NB(aa).total_tax_rate
        document.getElementById("tax_table").rows[2].cells[1].innerText=NB(aa).fed_tax_rate
        document.getElementById("tax_table").rows[3].cells[1].innerText=NB(aa).prov_tax_rate
    }
    else if(value=='PE'){
        //document.getElementById('after_tax').value = PE(aa).income_after
        document.getElementById("tax_table").rows[0].cells[1].innerText=PE(aa).income_after
        document.getElementById("tax_table").rows[1].cells[1].innerText=PE(aa).total_tax_rate
        document.getElementById("tax_table").rows[2].cells[1].innerText=PE(aa).fed_tax_rate
        document.getElementById("tax_table").rows[3].cells[1].innerText=PE(aa).prov_tax_rate
    }
    else if(value=='NL'){
        //document.getElementById('after_tax').value = NL(aa).income_after
        document.getElementById("tax_table").rows[0].cells[1].innerText=NL(aa).income_after
        document.getElementById("tax_table").rows[1].cells[1].innerText=NL(aa).total_tax_rate
        document.getElementById("tax_table").rows[2].cells[1].innerText=NL(aa).fed_tax_rate
        document.getElementById("tax_table").rows[3].cells[1].innerText=NL(aa).prov_tax_rate
    }
    else if(value=='YT'){
        //document.getElementById('after_tax').value = YT(aa).income_after
        document.getElementById("tax_table").rows[0].cells[1].innerText=YT(aa).income_after
        document.getElementById("tax_table").rows[1].cells[1].innerText=YT(aa).total_tax_rate
        document.getElementById("tax_table").rows[2].cells[1].innerText=YT(aa).fed_tax_rate
        document.getElementById("tax_table").rows[3].cells[1].innerText=YT(aa).prov_tax_rate
    }
    else if(value=='NT'){
        //document.getElementById('after_tax').value = NT(aa).income_after
        document.getElementById("tax_table").rows[0].cells[1].innerText=NT(aa).income_after
        document.getElementById("tax_table").rows[1].cells[1].innerText=NT(aa).total_tax_rate
        document.getElementById("tax_table").rows[2].cells[1].innerText=NT(aa).fed_tax_rate
        document.getElementById("tax_table").rows[3].cells[1].innerText=NT(aa).prov_tax_rate
    }
    else if(value=='NU'){
        //document.getElementById('after_tax').value = NU(aa).income_after
        document.getElementById("tax_table").rows[0].cells[1].innerText=NU(aa).income_after
        document.getElementById("tax_table").rows[1].cells[1].innerText=NU(aa).total_tax_rate
        document.getElementById("tax_table").rows[2].cells[1].innerText=NU(aa).fed_tax_rate
        document.getElementById("tax_table").rows[3].cells[1].innerText=NU(aa).prov_tax_rate
    }
    
    
}