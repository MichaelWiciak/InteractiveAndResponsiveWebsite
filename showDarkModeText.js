$(document).ready(function() {
  $("#hide").click(function() {
    $("#DarkModetext").fadeOut();
  });

  $("#show").click(function() {
    $("#DarkModetext").fadeIn();
  });
});


$(document).ready(function() {
  $("#hideButtonGallery").click(function() {
    $("#photoGallery").fadeToggle();
  });
});


$(document).ready(function() {
  $("#hideButtonAnimation").click(function() {
    $("#animationContainer").toggle();
  });
});

$(document).ready(function() {
  $("#hideButtonForm").click(function() {
    $("#formContainer").slideToggle();
  });
});

$(document).ready(function() {
  $("#showHTML").click(function() {
    $("#result").slideUp();
    $("#result").hide();
    $("#result").text("Text: " + $("#animationContainer").text());
    $("#result").slideDown();

  });
  $("#showText").click(function() {
    $("#result").slideUp();
    $("#result").hide();
    $("#result").text("HTML: " + $("#animationContainer").html());
    $("#result").slideDown();
  });
  $("#hideHTMLText").click(function() {
    $("#result").slideUp();
  });
});

$(document).ready(function() {
  $("#infoOfContainer").click(function() {
    $("#containerData").hide();
    $("#containerData").text("class: " + $("#animationContainer").attr("class") +", " + "href: " + $("#animationContainer").attr("href") + ", " + "ID: " + $("#animationContainer").attr("id"));
    $("#containerData").slideDown();
  });
  $("#hideDataOfContainer").click(function() {
    $("#containerData").slideUp();
  });
});

$(document).ready(function() {
  $("#userNameChange").click(function() {
    var string = $("#usernameInput").val();
    $("#userNameDisplay").html(string);
    localStorage.setItem('username', string);
  });
});

function loadUsername() {
  var n = localStorage.getItem('username');
  if (n!=null){

    var content = document.getElementById("userNameDisplay");
    if (content!=null){
      content.innerText = n;
    }
  }
  else {
    alert("Entered");
    n = "None Saved";
    var content = document.getElementById("userNameDisplay");
    var n = content.innerText;
  }
}

loadUsername();
