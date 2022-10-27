
/** Bài 1 
* Tinh ngày mai ngày hôm qua
* - Đầu vào
*      + month
*      + year
*      + day
* - Xử lý
*    ngày mai
if (day > 31 || day < 1) {
  alert("Dữ Liệu Không Hợp Lệ");
} else {
  if (month >12 || month < 1 ) {
    alert("Dữ Liệu Không Hợp Lệ");
  } else {
    if (year < 1000) {
      alert("Năm lớn hơn 1000");
    } else {
      if (day == 31 && (month ==1 || month ==3 || month ==5 || month ==7 || month ==8 || month ==10 || month ==12)) {
        day = 1
        month++
      } else {
        if (day == 30 && (month ==4 || month ==6 || month ==9 || month ==11)) {
          day = 1
          month++
        } else {
          if (month == 2) {
            if (day ==29 && year / 4 && (year % 4 == 0 || year / 400 == 0)) {
              day = 1
              month = 3
            } else {
              if (day ==28 && !(year / 4 && (year % 4 == 0 || year / 400 == 0))) {
                day = 1
                month = 3
              } else {
                if (day < 1 && day > 28) {
                  alert("Dữ Liệu Không Hợp Lệ");
                } else {
                  day++
                }
              }
            }
          } else {
            if (day == 31 && month == 12) {
              day = 1
              month = 1
              year++
            } else {
              day++
            }
          }
        }
      }
    }
  }
}
*    ngày hôm qua
  if (day > 31 || day < 1) {
    alert("Dữ Liệu Không Hợp Lệ");
  } else {
    if (month >12 || month < 1 ) {
      alert("Dữ Liệu Không Hợp Lệ");
    } else {
      if (year < 1000) {
        alert("Năm lớn hơn 1000");
      } else {
        if (day == 1 && (month ==1 || month ==2 || month ==4 || month ==6 || month ==8 || month ==9 || month ==11)) {
          day = 31
          month--
        } else {
          if (day == 1 && (month ==5 || month ==7 || month ==10 || month ==12)) {
            day = 30
            month--
          } else {
            if (month == 3) {
              if (day ==1 && year1 / 4 && (year1 % 4 == 0 || year1 / 400 == 0)) {
                day = 29
                month = 2
              } else {
                if (day ==1 && !(year1 / 4 && (year1 % 4 == 0 || year1 / 400 == 0))) {
                  day = 28
                  month = 2
                } else {
                  if (day < 1 || day > 31) {
                    alert("Dữ Liệu Không Hợp Lệ");
                  } else {
                    day--
                  }
                }
              }
            } else {
              if (day == 1 && month == 1) {
                day = 31
                month = 12
                year--
              } else {
                day--
              }
            }
          }
        }
      }
    }
  }

* - Đầu ra
*      + Show kết quả
*/
document.getElementById("btnTommorow").onclick = function () {
  //lấy thông tin từ user
  var month = document.getElementById("Month").value * 1;
  var year = document.getElementById("Year").value * 1;
  var day = document.getElementById("Day").value * 1;
  //xu ly
if (day > 31 || day < 1) {
  alert("Dữ Liệu Không Hợp Lệ");
} else {
  if (month >12 || month < 1 ) {
    alert("Dữ Liệu Không Hợp Lệ");
  } else {
    if (year < 1000) {
      alert("Năm lớn hơn 1000");
    } else {
      if (day == 31 && (month ==1 || month ==3 || month ==5 || month ==7 || month ==8 || month ==10 || month ==12)) {
        day = 1
        month++
      } else {
        if (day == 30 && (month ==4 || month ==6 || month ==9 || month ==11)) {
          day = 1
          month++
        } else {
          if (month == 2) {
            if (day ==29 && year / 4 && (year % 4 == 0 || year / 400 == 0)) {
              day = 1
              month = 3
            } else {
              if (day ==28 && !(year / 4 && (year % 4 == 0 || year / 400 == 0))) {
                day = 1
                month = 3
              } else {
                if (day < 1 && day > 28) {
                  alert("Dữ Liệu Không Hợp Lệ");
                } else {
                  day++
                }
              }
            }
          } else {
            if (day == 31 && month == 12) {
              day = 1
              month = 1
              year++
            } else {
              day++
            }
          }
        }
      }
    }
  }
}

  var result = day + "/" + month + "/" +year

  //Show kết quả
  document.getElementById("infoDay").innerHTML = result;
};
  //style
  document.getElementById("infoDay").classList.add("alert-success");



  document.getElementById("btnYesterday").onclick = function () {
    //lấy thông tin từ user
    var month = document.getElementById("Month").value * 1;
    var year = document.getElementById("Year").value * 1;
    var day = document.getElementById("Day").value * 1;
    //xu ly
  if (day > 31 || day < 1) {
    alert("Dữ Liệu Không Hợp Lệ");
  } else {
    if (month >12 || month < 1 ) {
      alert("Dữ Liệu Không Hợp Lệ");
    } else {
      if (year < 1000) {
        alert("Năm lớn hơn 1000");
      } else {
        if (day == 1 && (month ==1 || month ==2 || month ==4 || month ==6 || month ==8 || month ==9 || month ==11)) {
          day = 31
          month--
        } else {
          if (day == 1 && (month ==5 || month ==7 || month ==10 || month ==12)) {
            day = 30
            month--
          } else {
            if (month == 3) {
              if (day ==1 && year1 / 4 && (year1 % 4 == 0 || year1 / 400 == 0)) {
                day = 29
                month = 2
              } else {
                if (day ==1 && !(year1 / 4 && (year1 % 4 == 0 || year1 / 400 == 0))) {
                  day = 28
                  month = 2
                } else {
                  if (day < 1 || day > 31) {
                    alert("Dữ Liệu Không Hợp Lệ");
                  } else {
                    day--
                  }
                }
              }
            } else {
              if (day == 1 && month == 1) {
                day = 31
                month = 12
                year--
              } else {
                day--
              }
            }
          }
        }
      }
    }
  }
  
    var result = day + "/" + month + "/" + year
  
    //Show kết quả
    document.getElementById("infoDay").innerHTML = result;
  };
    //style
    document.getElementById("infoDay").classList.add("alert-success");





/** Bài 2 
* Tinh ngày
* - Đầu vào
*      + month1
*      + year1
*      + day1
* - Xử lý
*    if (month1 >12 || month1 < 1 ) {
  alert("Dữ Liệu Không Hợp Lệ");
} else {
  if (year1 < 1000) {
    alert("Năm lớn hơn 1000");
  } else {
    if (month1 === 2) {
      if (year1 / 4 && year1 % 4 == 0 || year1 / 400 == 0) {
        day1 = 29 + "ngày"
      } else {
        day1 = 28 + "ngày"
      }
    } else {
      if (month1 === 4 || month1 === 6 || month1 === 9 || month1 === 11) {
        day1 = 30 + "ngày"
      } else {
        day1 = 31 + "ngày"
      }
    }
  }
}

* - Đầu ra
*      + Show kết quả
*/
document.getElementById("btnTinh").onclick = function () {
  //lấy thông tin từ user
  var month1 = document.getElementById("Month1").value * 1;
  var year1 = document.getElementById("Year1").value * 1;
  var day1;
  //xu ly
if (month1 >12 || month1 < 1 ) {
  alert("Dữ Liệu Không Hợp Lệ");
} else {
  if (year1 < 1000) {
    alert("Năm lớn hơn 1000");
  } else {
    if (month1 === 2) {
      if (year1 / 4 && year1 % 4 == 0 || year1 / 400 == 0) {
        day1 = 29 + "ngày"
      } else {
        day1 = 28 + "ngày"
      }
    } else {
      if (month1 === 4 || month1 === 6 || month1 === 9 || month1 === 11) {
        day1 = 30 + "ngày"
      } else {
        day1 = 31 + "ngày"
      }
    }
  }
}

  var result = day1 

  //Show kết quả
  document.getElementById("infoTinh").innerHTML = result;
};
  //style
  document.getElementById("infoTinh").classList.add("alert-success");


/** Bài 3
* Đọc só
* - Đầu vào
*      + so
*      + Number1
*      + Number2
*      + Number3
* - Xử lý
Number1 = so / 100
  Number2 = so % 100 / 10
  Number3 = so % 10

  Number1 = parseInt (Number1)
  Number2 = parseInt (Number2)
  Number3 = parseInt (Number3)


  switch (Number1) {
    case 1:
      Number1 = "một trăm ";
      break;

    case 2:
      Number1 = "hai trăm ";
      break;

    case 3:
      Number1 = "ba trăm ";
      break;

    case 4:
      Number1 = "bốn trăm ";
      break;

    case 5:
      Number1 = "năm trăm ";
      break;

    case 6:
      Number1 = "sáu trăm ";
      break;

    case 7:
      Number1 = "bảy trăm ";
      break;

    case 8:
      Number1 = "tám trăm ";
      break;

    case 9:
      Number1 = "chín trăm ";
      break;

    default:
      break;
  }

  switch (Number2) {
    case 0:
      Number2 = "";
      break;

    case 1:
      Number2 = "mười ";
      break;

    case 2:
      Number2 = "hai mươi ";
      break;

    case 3:
      Numbe2 = "ba mươi ";
      break;

    case 4:
      Number2 = "bốn mươi ";
      break;

    case 5:
      Number2 = "năm mươi ";
      break;

    case 6:
      Number2 = "sáu mươi ";
      break;

    case 7:
      Number2 = "bảy mươi ";
      break;

    case 8:
      Number2 = "tám mươi ";
      break;

    case 9:
      Number2 = "chín mươi ";
      break;

    default:
      break;
  }

  switch (Number3) {
    case 0:
      Number3 = "";
      break;

    case 1:
      Number3 = "một";
      break;

    case 2:
      Number3 = "hai";
      break;

    case 3:
      Number3 = "ba";
      break;

    case 4:
      Number3 = "bốn";
      break;

    case 5:
      Number3 = "năm";
      break;

    case 6:
      Number3 = "sáu";
      break;

    case 7:
      Number3 = "bảy";
      break;

    case 8:
      Number3 = "tám";
      break;

    case 9:
      Number3 = "chín";
      break;

    default:
      break;
  }

* - Đầu ra
*      + Show kết quả
*/
document.getElementById("btnSo").onclick = function () {
  //lấy thông tin từ user
  var so = document.getElementById("So").value * 1;
  var Number1;
  var Number2;
  var Number3;
  //xu ly
  Number1 = so / 100
  Number2 = so % 100 / 10
  Number3 = so % 10

  Number1 = parseInt (Number1)
  Number2 = parseInt (Number2)
  Number3 = parseInt (Number3)


  switch (Number1) {
    case 1:
      Number1 = "một trăm ";
      break;

    case 2:
      Number1 = "hai trăm ";
      break;

    case 3:
      Number1 = "ba trăm ";
      break;

    case 4:
      Number1 = "bốn trăm ";
      break;

    case 5:
      Number1 = "năm trăm ";
      break;

    case 6:
      Number1 = "sáu trăm ";
      break;

    case 7:
      Number1 = "bảy trăm ";
      break;

    case 8:
      Number1 = "tám trăm ";
      break;

    case 9:
      Number1 = "chín trăm ";
      break;

    default:
      break;
  }

  switch (Number2) {
    case 0:
      Number2 = "";
      break;

    case 1:
      Number2 = "mười ";
      break;

    case 2:
      Number2 = "hai mươi ";
      break;

    case 3:
      Numbe2 = "ba mươi ";
      break;

    case 4:
      Number2 = "bốn mươi ";
      break;

    case 5:
      Number2 = "năm mươi ";
      break;

    case 6:
      Number2 = "sáu mươi ";
      break;

    case 7:
      Number2 = "bảy mươi ";
      break;

    case 8:
      Number2 = "tám mươi ";
      break;

    case 9:
      Number2 = "chín mươi ";
      break;

    default:
      break;
  }

  switch (Number3) {
    case 0:
      Number3 = "";
      break;

    case 1:
      Number3 = "một";
      break;

    case 2:
      Number3 = "hai";
      break;

    case 3:
      Number3 = "ba";
      break;

    case 4:
      Number3 = "bốn";
      break;

    case 5:
      Number3 = "năm";
      break;

    case 6:
      Number3 = "sáu";
      break;

    case 7:
      Number3 = "bảy";
      break;

    case 8:
      Number3 = "tám";
      break;

    case 9:
      Number3 = "chín";
      break;

    default:
      break;
  }


  var result2 = Number1 + "" + Number2 + "" + Number3

  //Show kết quả
  document.getElementById("infoSo").innerHTML = result2;
};
  //style
  document.getElementById("infoSo").classList.add("alert-success");


  /** Bài 4 
* Tìm sinh viên xa trường nhất
* - Đầu vào
*      + var Names1
*      + var Names2
*      + var Names3
*      + var Names4
*      + var coordinates1
*      + var coordinates2
*      + var coordinates3
*      + var coordinates4
*      + var coordinates5
*      + var coordinates6
*      + var coordinates7
*      + var coordinates8
*      + var A
*      + var B
*      + var C
* - Xử lý
    if (A >= B) {
      if (A >= C) {
        Names4 = Names1
      } else {
        Names4 = Names3
      }
    } else {
      if (B >= C) {
        Names4 = Names2
      } else {
        Names4 = Names3
      }
    }
    var result = "Sinh viên xa trường nhất : " + Names4

* - Đầu ra
*      + Show kết quả
*/
  document.getElementById("btnTim").onclick = function () {
    //lấy thông tin từ user
    var Names1 = document.getElementById("Names1").value;
    var Names2 = document.getElementById("Names2").value;
    var Names3 = document.getElementById("Names3").value;
    var Names4;
    var coordinates1 = document.getElementById("coordinates1").value * 1;
    var coordinates2 = document.getElementById("coordinates2").value * 1;
    var coordinates3 = document.getElementById("coordinates3").value * 1;
    var coordinates4 = document.getElementById("coordinates4").value * 1;
    var coordinates5 = document.getElementById("coordinates5").value * 1;
    var coordinates6 = document.getElementById("coordinates6").value * 1;
    var coordinates7 = document.getElementById("coordinates7").value * 1;
    var coordinates8 = document.getElementById("coordinates8").value * 1;
    var A = Math.sqrt(Math.pow((coordinates7-coordinates1)) + Math.pow((coordinates8-coordinates2)))
    var B = Math.sqrt(Math.pow((coordinates7-coordinates3)) + Math.pow((coordinates8-coordinates4)))
    var C = Math.sqrt(Math.pow((coordinates7-coordinates5)) + Math.pow((coordinates8-coordinates6)))

    var A = parseInt (A)
    var B = parseInt (B)
    var C = parseInt (C)
    //xu ly
    if (A >= B) {
      if (A >= C) {
        Names4 = Names1
      } else {
        Names4 = Names3
      }
    } else {
      if (B >= C) {
        Names4 = Names2
      } else {
        Names4 = Names3
      }
    }
    var result = "Sinh viên xa trường nhất : " + Names4
  
    //Show kết quả
    document.getElementById("infoTim").innerHTML = result;
  };
    //style
    document.getElementById("infoTim").classList.add("alert-success");
