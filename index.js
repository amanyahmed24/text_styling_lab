var fonts = document.getElementsByName('font');
var text = document.getElementById('PAR');

function ChangeFont(font){
    text.style.fontFamily=font;
};
function ChangeAlign(value){
    text.style.textAlign = value;
};

function ChangLHeight(value){
    text.style.lineHeight = value;
};
function ChangeLSpace(value){
    text.style.letterSpacing=value;
};

function ChangeIndent(value){
    text.style.textIndent = value;
};

function ChangeTransform(value){
    text.style.textTransform = value;
};

function ChangeDecorate(value){
    text.style.textDecoration = value;

};

function ChangeBorder(value){
    text.style.borderStyle = value;

};

function ChangeBorderColor(value){
    text.style.borderColor = value;

};
