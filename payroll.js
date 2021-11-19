function calculate() {
    var hours, prte, mrst, gpay, ftax, npay, dep;
    hours = parseFloat(document.payroll.txthours.value);
    prte = parseFloat(document.payroll.txtprte.value);

    if (document.payroll.txtrad1[0].checked) mrst = .3;
    else mrst = .2;

    dep = document.payroll.txtdep.selectedIndex;

    gpay = prte * hours;
    document.payroll.txtgpay.value = gpay;

    ftax = (gpay * mrst) - (dep * 10);
    document.payroll.txtftax.value = ftax;

    npay = gpay - ftax;
    document.payroll.txtnpay.value = npay;
}

function btnclear() {
    document.payroll.txtgpay.value = " ";
    document.payroll.txtftax.value = " ";
    document.payroll.txtnpay.value = " ";
}