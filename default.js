var xposes = [0-getWidth(), 0-((3/4)*getWidth()), 0-((1/2)*getWidth()), 0-((1/4)*getWidth()), 0, getWidth()/4, getWidth()/2, 3*(getWidth()/4), getWidth()]
var click = new Rectangle(xposes[8], 80);
var killer = new Rectangle(xposes[7], 80);
var killer2 = new Rectangle(xposes[7], 80);
var txt = new Text("Left for Mouse, Right for Keyboard", "19pt Arial");
var char = new Rectangle(50, 50);
char.setPosition(getWidth()/16,getHeight()-xposes[5]);
char.setColor("green");
var ct = 0;
var rSelect;
var i = 0;
var mvmt = 6;
var bct = 1;
var score = 0;
var ingame = 0;
var charspot = 1;
var mvct = 0;
var mode;
var mouseHS = 0;
var charHS = 0;
var scoretxt = new Text(score, "20pt Arial");

function start() {
    click.setPosition(0, (getHeight()/2)-40);
    click.setColor("orange");
    add(click);
    txt.setPosition(5, (getHeight()/2)+10);
    add(txt);
    scoretxt.setPosition(340, 40);
    scoretxt.setColor("white");
    keyDownMethod(keyDown);
}

function keyDown(e) {
    if (e.keyCode == Keyboard.LEFT) {
        if(i == 0){
            remove(click);
            remove(txt);
            var bg = new Rectangle(1000, 1000);
            bg.setPosition(0, 0);
            bg.setColor("black");
            ct = 0;
            mvmt = 6;
            bct = 1;
            score = 0;
            scoretxt.setText(score);
            ingame = 1;
            add(bg);
            add(scoretxt);
            i = 1;
            randomFly();
            mouseMoveMethod(mouseMode);
        }
        if(charspot > 1){
            char.move(-getWidth()/4, 0);
            charspot = charspot-1;
        }
    }
    if (e.keyCode == Keyboard.RIGHT) {
        if(i == 0){
            remove(click);
            remove(txt);
            var bg = new Rectangle(1000, 1000);
            bg.setPosition(0, 0);
            bg.setColor("black");
            i = 0;
            ct = 0;
            mvmt = 6;
            bct = 1;
            score = 0;
            scoretxt.setText(score);
            ingame = 1;
            add(bg);
            add(scoretxt);
            i = 1;
            add(char);
            setTimer(charMode, 0);
            randomFly();
        }
        if(charspot < 4){
            char.move(getWidth()/4, 0);
            charspot = charspot+1;
        }
    }
}

function randomFly() {
    rSelect = Randomizer.nextInt(1, 4);
    if(rSelect == 1){
        killer.setPosition(xposes[5], -80);
        killer.setColor("red");
        add(killer);
        killer2.setPosition(xposes[1], -80)
        killer2.setColor("red");
        add(killer2);
    }
    if(rSelect == 2){
        killer.setPosition(xposes[2], -80);
        killer.setColor("red");
        add(killer);
        killer2.setPosition(xposes[6], -80);
        killer2.setColor("red");
        add(killer2);
    }
    if(rSelect == 3){
        killer.setPosition(xposes[3], -80);
        killer.setColor("red");
        add(killer);
        killer2.setPosition(xposes[7], -80);
        killer2.setColor("red");
        add(killer2);
    }
    if(rSelect == 4){
        killer.setPosition(xposes[4], -80);
        killer.setColor("red");
        add(killer);
        killer2.setPosition(xposes[8], -80)
        killer2.setColor("red");
        add(killer2);
    }
    setTimer(moveKiller, 15);
}

function moveKiller() {
    killer.move(0, mvmt);
    killer2.move(0, mvmt);
    ct = ct + 1;
    if(ct >= (560/mvmt)){
        remove(killer);
        remove(killer2);
        stopTimer(moveKiller);
        ct = 0;
        bct = bct + 2;
        mvmt = mvmt + (5/bct);
        randomFly();
        score = score + 1;
        scoretxt.setText(score);
    }
}

function mouseMode(e){
    if(ingame==1){
    if(e.getX() > killer.getX()){
        if(e.getY() > killer.getY()){
            if(e.getX() < killer.getX()+killer.getWidth()){
                if(e.getY() < killer.getY()+killer.getHeight()){
                    stopTimer(moveKiller);
                    stopTimer(charMode);
                    stopTimer(mouseMode);
                    println("Nice try! You earned " + score + " points. Press left for mouse mode, or right for keyboard mode!");
                    i = 0;
                    ingame = 0;
                }
            }
        }
    }
    if(e.getX() > killer2.getX()){
        if(e.getY() > killer2.getY()){
            if(e.getX() < killer2.getX()+killer2.getWidth()){
                if(e.getY() < killer2.getY()+killer2.getHeight()){
                    stopTimer(charMode);
                    stopTimer(mouseMode);
                    println("Nice try! You earned " + score + " points. Press left for mouse mode, or right for keyboard mode!");
                    i = 0;
                    ingame = 0;
                }
            }
        }
    }
    }
}

function charMode(){
    if(ingame==1){
    if(char.getX()+25 > killer.getX()){
        if(char.getY()+25 > killer.getY()){
            if(char.getX()+25 < killer.getX()+killer.getWidth()){
                if(char.getY()+25 < killer.getY()+killer.getHeight()){
                    stopTimer(moveKiller);
                    stopTimer(charMode);
                    stopTimer(mouseMode);
                    println("Nice try! You earned " + score + " points. Press left for mouse mode, or right for keyboard mode!");
                    i = 0;
                    ingame = 0;
                }
            }
        }
    }
    if(char.getX()+25 > killer2.getX()){
        if(char.getY()+25 > killer2.getY()){
            if(char.getX()+25 < killer2.getX()+killer2.getWidth()){
                if(char.getY()+25 < killer2.getY()+killer2.getHeight()){
                    stopTimer(moveKiller);
                    stopTimer(charMode);
                    stopTimer(mouseMode);
                    println("Nice try! You earned " + score + " points. Press left for mouse mode, or right for keyboard mode!");
                    i = 0;
                    ingame = 0;
                }
            }
        }
    }
    }
}