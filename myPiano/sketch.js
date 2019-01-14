
var keys = [];
var freq = [];
var wave;
base = 440;
var env;
var select_btn;
var base=261.63;

function setup() {
  // put setup code here
  env = new p5.Envelope();
  env.setADSR(0.08, 0.2, 0.3, 0.1);
  env.setRange(2.0, 0);
  select_btn = createButton('C5');
  select_btn.class('change');
  select_btn.mousePressed(function(){
    if (base==261.63){
      base = 523.25;
      select_btn.html('C4');
      update();
    } else{
      base = 261.63;
      select_btn.html('C5');
      update();
    }
  });

  wave = new p5.Oscillator;
  wave.setType('triangle');
  wave.start();
  wave.amp(0);

  for (i=0; i<25; i++){
    keys[i] = createButton('');
    if (i==0 || i==2 || i==4 || i==5 || i==7 || i==9 || i==11 || i==12 || i==14 || i==16 || i==17 || i==19 || i==21 || i==23 || i==24){
    keys[i].class('white');
    keys[i].parent('box_');
  } else {
    keys[i].class('black');
    keys[i].parent('box_');
  }
  }

  for (i=0; i<25; i++){
    freq[i] = (base) * pow(2, (i/12));
  }

  keys[0].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[0]);
  });
  keys[1].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[1]);
  });
  keys[2].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[2]);
  });
  keys[3].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[3]);
  });
  keys[4].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[4]);
  });
  keys[5].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[5]);
  });
  keys[6].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[6]);
  });
  keys[7].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[7]);
  });
  keys[8].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[8]);
  });
  keys[9].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[9]);
  });
  keys[10].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[10]);
  });
  keys[11].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[11]);
  });
  keys[12].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[12]);
  });
  keys[13].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[13]);
  });
  keys[14].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[14]);
  });
  keys[15].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[15]);
  });
  keys[16].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[16]);
  });
  keys[17].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[17]);
  });
  keys[18].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[18]);
  });
  keys[19].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[19]);
  });
  keys[20].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[20]);
  });
  keys[21].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[21]);
  });
  keys[22].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[22]);
  });
  keys[23].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[23]);
  });
  keys[24].mousePressed(function(){
    env.play();
    wave.amp(env);
    wave.freq(freq[24]);
  });

}

function update(){
  for (i=0; i<25; i++){
    freq[i] = (base) * pow(2, (i/12));
  }
}

function draw() {
  // put drawing code here

}
