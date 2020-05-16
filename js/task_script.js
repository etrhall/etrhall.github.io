/**
* @Author: Edward Hall <edwardhall>
* @Date:   2020-03-06T19:42:57+00:00
* @Email:  edward.hall@qmul.ac.uk
 * @Last modified by:   edwardhall
 * @Last modified time: 2020-05-16T12:05:42+01:00
*/

/* Experiment settings */
var completion_url = "https://app.prolific.co/submissions/complete?cc=I2PWSFRG"
var require_answer = true;
var shuffle_pairs = false;


/* Create participant id and Prolific PID*/
var participant = jsPsych.randomization.randomID();

function prolificPID (url) {
    if (url.indexOf("PROLIFIC_PID") > -1) {
      return url.split('PROLIFIC_PID=').pop().split('&')[0]
    } else {
      return null
    }
};

var pid = prolificPID(window.location.href)

jsPsych.data.addProperties(
  {
    participant_id: participant,
    prolific_pid: pid
  }
);



/* ================================================================= */
/* Stimuli                                                           */
/* ================================================================= */

/* Files to load */
var audio = [
  "audio/vol.mp3",
  "audio/ex_1_0.mp3",
  "audio/ex_1_1.mp3",
  "audio/ex_2_0.mp3",
  "audio/ex_2_1.mp3",
  "audio/IAD0035_05_0.mp3",
  "audio/IAD0035_05_1.mp3",
  "audio/IAH0001_00_0.mp3",
  "audio/IAH0001_00_1.mp3",
  "audio/IBB0032_03_0.mp3",
  "audio/IBB0032_03_1.mp3",
  "audio/IBB0038_01_0.mp3",
  "audio/IBB0038_01_1.mp3",
  "audio/IBS0042_00_0.mp3",
  "audio/IBS0042_00_1.mp3",
  "audio/ICA0007_00_0.mp3",
  "audio/ICA0007_00_1.mp3",
  "audio/ICD0004_02_0.mp3",
  "audio/ICD0004_02_1.mp3",
  "audio/ICD0086_00_0.mp3",
  "audio/ICD0086_00_1.mp3",
  "audio/ICD0088_00_0.mp3",
  "audio/ICD0088_00_1.mp3",
  "audio/ICS0080_06_0.mp3",
  "audio/ICS0080_06_1.mp3",
  "audio/ICS0086_00_0.mp3",
  "audio/ICS0086_00_1.mp3",
  "audio/ICS0239_00_0.mp3",
  "audio/ICS0239_00_1.mp3",
  "audio/ICS0248_00_0.mp3",
  "audio/ICS0248_00_1.mp3",
  "audio/IEG0033_01_0.mp3",
  "audio/IEG0033_01_1.mp3",
  "audio/IEG0138_01_0.mp3",
  "audio/IEG0138_01_1.mp3",
  "audio/IFC0008_00_0.mp3",
  "audio/IFC0008_00_1.mp3",
  "audio/IFC0046_02_0.mp3",
  "audio/IFC0046_02_1.mp3",
  "audio/IFC0111_00_0.mp3",
  "audio/IFC0111_00_1.mp3",
  "audio/IFS0367_03_0.mp3",
  "audio/IFS0367_03_1.mp3",
  "audio/IFS0587_03_0.mp3",
  "audio/IFS0587_03_1.mp3",
  "audio/IFS0592_01_0.mp3",
  "audio/IFS0592_01_1.mp3",
  "audio/IFS0792_00_0.mp3",
  "audio/IFS0792_00_1.mp3",
  "audio/IGF0056_00_0.mp3",
  "audio/IGF0056_00_1.mp3",
  "audio/IGF0063_03_0.mp3",
  "audio/IGF0063_03_1.mp3",
  "audio/IGF0112_01_0.mp3",
  "audio/IGF0112_01_1.mp3",
  "audio/IGF0115_00_0.mp3",
  "audio/IGF0115_00_1.mp3",
  "audio/IGF0120_00_0.mp3",
  "audio/IGF0120_00_1.mp3",
  "audio/IGF0121_00_0.mp3",
  "audio/IGF0121_00_1.mp3",
  "audio/IGH0229_00_0.mp3",
  "audio/IGH0229_00_1.mp3",
  "audio/IGH0546_01_0.mp3",
  "audio/IGH0546_01_1.mp3",
  "audio/IGR0001_02_0.mp3",
  "audio/IGR0001_02_1.mp3",
  "audio/IJB0015_04_0.mp3",
  "audio/IJB0015_04_1.mp3",
  "audio/IJB0064_04_0.mp3",
  "audio/IJB0064_04_1.mp3",
  "audio/IJB0066_05_0.mp3",
  "audio/IJB0066_05_1.mp3",
  "audio/IJB0067_01_0.mp3",
  "audio/IJB0067_01_1.mp3",
  "audio/IJB0067_03_0.mp3",
  "audio/IJB0067_03_1.mp3",
  "audio/IJB0109_00_0.mp3",
  "audio/IJB0109_00_1.mp3",
  "audio/IJB0154_04_0.mp3",
  "audio/IJB0154_04_1.mp3",
  "audio/IJH0159_05_0.mp3",
  "audio/IJH0159_05_1.mp3",
  "audio/IJH0403_01_0.mp3",
  "audio/IJH0403_01_1.mp3",
  "audio/IJH0411_01_0.mp3",
  "audio/IJH0411_01_1.mp3",
  "audio/IJH0411_04_0.mp3",
  "audio/IJH0411_04_1.mp3",
  "audio/IJH0412_01_0.mp3",
  "audio/IJH0412_01_1.mp3",
  "audio/IJH0414_01_0.mp3",
  "audio/IJH0414_01_1.mp3",
  "audio/IJH0414_04_0.mp3",
  "audio/IJH0414_04_1.mp3",
  "audio/IJH0418_02_0.mp3",
  "audio/IJH0418_02_1.mp3",
  "audio/IJH0419_01_0.mp3",
  "audio/IJH0419_01_1.mp3",
  "audio/IJH0427_04_0.mp3",
  "audio/IJH0427_04_1.mp3",
  "audio/IJH0430_01_0.mp3",
  "audio/IJH0430_01_1.mp3",
  "audio/IJH0431_02_0.mp3",
  "audio/IJH0431_02_1.mp3",
  "audio/IJH0432_04_0.mp3",
  "audio/IJH0432_04_1.mp3",
  "audio/IJH0435_03_0.mp3",
  "audio/IJH0435_03_1.mp3",
  "audio/IJH0435_04_0.mp3",
  "audio/IJH0435_04_1.mp3",
  "audio/IJH0440_02_0.mp3",
  "audio/IJH0440_02_1.mp3",
  "audio/IJH0446_04_0.mp3",
  "audio/IJH0446_04_1.mp3",
  "audio/IJH0450_05_0.mp3",
  "audio/IJH0450_05_1.mp3",
  "audio/IJH0452_01_0.mp3",
  "audio/IJH0452_01_1.mp3",
  "audio/IJH0452_03_0.mp3",
  "audio/IJH0452_03_1.mp3",
  "audio/IJH0455_04_0.mp3",
  "audio/IJH0455_04_1.mp3",
  "audio/IJH0457_04_0.mp3",
  "audio/IJH0457_04_1.mp3",
  "audio/IJH0461_04_0.mp3",
  "audio/IJH0461_04_1.mp3",
  "audio/IJH0462_01_0.mp3",
  "audio/IJH0462_01_1.mp3",
  "audio/IJH0465_02_0.mp3",
  "audio/IJH0465_02_1.mp3",
  "audio/IJH0466_04_0.mp3",
  "audio/IJH0466_04_1.mp3",
  "audio/IJS0054_02_0.mp3",
  "audio/IJS0054_02_1.mp3",
  "audio/IJS0054_03_0.mp3",
  "audio/IJS0054_03_1.mp3",
  "audio/ILB0162_01_0.mp3",
  "audio/ILB0162_01_1.mp3",
  "audio/ILB0164_01_0.mp3",
  "audio/ILB0164_01_1.mp3",
  "audio/ILB0164_02_0.mp3",
  "audio/ILB0164_02_1.mp3",
  "audio/ILB0164_03_0.mp3",
  "audio/ILB0164_03_1.mp3",
  "audio/ILB0164_04_0.mp3",
  "audio/ILB0164_04_1.mp3",
  "audio/ILB0168_03_0.mp3",
  "audio/ILB0168_03_1.mp3",
  "audio/ILB0169_01_0.mp3",
  "audio/ILB0169_01_1.mp3",
  "audio/ILB0169_03_0.mp3",
  "audio/ILB0169_03_1.mp3",
  "audio/ILB0171_03_0.mp3",
  "audio/ILB0171_03_1.mp3",
  "audio/ILB0172_04_0.mp3",
  "audio/ILB0172_04_1.mp3",
  "audio/ILB0173_01_0.mp3",
  "audio/ILB0173_01_1.mp3",
  "audio/ILB0175_03_0.mp3",
  "audio/ILB0175_03_1.mp3",
  "audio/ILB0177_01_0.mp3",
  "audio/ILB0177_01_1.mp3",
  "audio/ILB0178_03_0.mp3",
  "audio/ILB0178_03_1.mp3",
  "audio/ILB0179_04_0.mp3",
  "audio/ILB0179_04_1.mp3",
  "audio/ILB0191_01_0.mp3",
  "audio/ILB0191_01_1.mp3",
  "audio/ILB0192_02_0.mp3",
  "audio/ILB0192_02_1.mp3",
  "audio/ILB0193_01_0.mp3",
  "audio/ILB0193_01_1.mp3",
  "audio/ILB0325_01_0.mp3",
  "audio/ILB0325_01_1.mp3",
  "audio/ILB0325_02_0.mp3",
  "audio/ILB0325_02_1.mp3",
  "audio/ILB0326_01_0.mp3",
  "audio/ILB0326_01_1.mp3",
  "audio/ILB0326_02_0.mp3",
  "audio/ILB0326_02_1.mp3",
  "audio/ILB0326_04_0.mp3",
  "audio/ILB0326_04_1.mp3",
  "audio/ILB0328_03_0.mp3",
  "audio/ILB0328_03_1.mp3",
  "audio/IMM0050_07_0.mp3",
  "audio/IMM0050_07_1.mp3",
  "audio/IMR0030_02_0.mp3",
  "audio/IMR0030_02_1.mp3",
  "audio/IRS0102_06_0.mp3",
  "audio/IRS0102_06_1.mp3",
  "audio/IRV0083_01_0.mp3",
  "audio/IRV0083_01_1.mp3",
  "audio/IWM0405_02_0.mp3",
  "audio/IWM0405_02_1.mp3",
  "audio/IWM0407_02_0.mp3",
  "audio/IWM0407_02_1.mp3",
  "audio/IWM0409_01_0.mp3",
  "audio/IWM0409_01_1.mp3",
  "audio/IWM0412_02_0.mp3",
  "audio/IWM0412_02_1.mp3",
  "audio/IWM0412_03_0.mp3",
  "audio/IWM0412_03_1.mp3",
  "audio/IWM0418_03_0.mp3",
  "audio/IWM0418_03_1.mp3"
];


/* Stimuli pairs */
var audio_stimuli = [
  {stimuli: ["audio/IAD0035_05_0.mp3", "audio/IAD0035_05_1.mp3"]},
  {stimuli: ["audio/IAH0001_00_0.mp3", "audio/IAH0001_00_1.mp3"]},
  {stimuli: ["audio/IBB0032_03_0.mp3", "audio/IBB0032_03_1.mp3"]},
  {stimuli: ["audio/IBB0038_01_0.mp3", "audio/IBB0038_01_1.mp3"]},
  {stimuli: ["audio/IBS0042_00_0.mp3", "audio/IBS0042_00_1.mp3"]},
  {stimuli: ["audio/ICA0007_00_0.mp3", "audio/ICA0007_00_1.mp3"]},
  {stimuli: ["audio/ICD0004_02_0.mp3", "audio/ICD0004_02_1.mp3"]},
  {stimuli: ["audio/ICD0086_00_0.mp3", "audio/ICD0086_00_1.mp3"]},
  {stimuli: ["audio/ICD0088_00_0.mp3", "audio/ICD0088_00_1.mp3"]},
  {stimuli: ["audio/ICS0080_06_0.mp3", "audio/ICS0080_06_1.mp3"]},
  {stimuli: ["audio/ICS0086_00_0.mp3", "audio/ICS0086_00_1.mp3"]},
  {stimuli: ["audio/ICS0239_00_0.mp3", "audio/ICS0239_00_1.mp3"]},
  {stimuli: ["audio/ICS0248_00_0.mp3", "audio/ICS0248_00_1.mp3"]},
  {stimuli: ["audio/IEG0033_01_0.mp3", "audio/IEG0033_01_1.mp3"]},
  {stimuli: ["audio/IEG0138_01_0.mp3", "audio/IEG0138_01_1.mp3"]},
  {stimuli: ["audio/IFC0008_00_0.mp3", "audio/IFC0008_00_1.mp3"]},
  {stimuli: ["audio/IFC0046_02_0.mp3", "audio/IFC0046_02_1.mp3"]},
  {stimuli: ["audio/IFC0111_00_0.mp3", "audio/IFC0111_00_1.mp3"]},
  {stimuli: ["audio/IFS0367_03_0.mp3", "audio/IFS0367_03_1.mp3"]},
  {stimuli: ["audio/IFS0587_03_0.mp3", "audio/IFS0587_03_1.mp3"]},
  {stimuli: ["audio/IFS0592_01_0.mp3", "audio/IFS0592_01_1.mp3"]},
  {stimuli: ["audio/IFS0792_00_0.mp3", "audio/IFS0792_00_1.mp3"]},
  {stimuli: ["audio/IGF0056_00_0.mp3", "audio/IGF0056_00_1.mp3"]},
  {stimuli: ["audio/IGF0063_03_0.mp3", "audio/IGF0063_03_1.mp3"]},
  {stimuli: ["audio/IGF0112_01_0.mp3", "audio/IGF0112_01_1.mp3"]},
  {stimuli: ["audio/IGF0115_00_0.mp3", "audio/IGF0115_00_1.mp3"]},
  {stimuli: ["audio/IGF0120_00_0.mp3", "audio/IGF0120_00_1.mp3"]},
  {stimuli: ["audio/IGF0121_00_0.mp3", "audio/IGF0121_00_1.mp3"]},
  {stimuli: ["audio/IGH0229_00_0.mp3", "audio/IGH0229_00_1.mp3"]},
  {stimuli: ["audio/IGH0546_01_0.mp3", "audio/IGH0546_01_1.mp3"]},
  {stimuli: ["audio/IGR0001_02_0.mp3", "audio/IGR0001_02_1.mp3"]},
  {stimuli: ["audio/IJB0015_04_0.mp3", "audio/IJB0015_04_1.mp3"]},
  {stimuli: ["audio/IJB0064_04_0.mp3", "audio/IJB0064_04_1.mp3"]},
  {stimuli: ["audio/IJB0066_05_0.mp3", "audio/IJB0066_05_1.mp3"]},
  {stimuli: ["audio/IJB0067_01_0.mp3", "audio/IJB0067_01_1.mp3"]},
  {stimuli: ["audio/IJB0067_03_0.mp3", "audio/IJB0067_03_1.mp3"]},
  {stimuli: ["audio/IJB0109_00_0.mp3", "audio/IJB0109_00_1.mp3"]},
  {stimuli: ["audio/IJB0154_04_0.mp3", "audio/IJB0154_04_1.mp3"]},
  {stimuli: ["audio/IJH0159_05_0.mp3", "audio/IJH0159_05_1.mp3"]},
  {stimuli: ["audio/IJH0403_01_0.mp3", "audio/IJH0403_01_1.mp3"]},
  {stimuli: ["audio/IJH0411_01_0.mp3", "audio/IJH0411_01_1.mp3"]},
  {stimuli: ["audio/IJH0411_04_0.mp3", "audio/IJH0411_04_1.mp3"]},
  {stimuli: ["audio/IJH0412_01_0.mp3", "audio/IJH0412_01_1.mp3"]},
  {stimuli: ["audio/IJH0414_01_0.mp3", "audio/IJH0414_01_1.mp3"]},
  {stimuli: ["audio/IJH0414_04_0.mp3", "audio/IJH0414_04_1.mp3"]},
  {stimuli: ["audio/IJH0418_02_0.mp3", "audio/IJH0418_02_1.mp3"]},
  {stimuli: ["audio/IJH0419_01_0.mp3", "audio/IJH0419_01_1.mp3"]},
  {stimuli: ["audio/IJH0427_04_0.mp3", "audio/IJH0427_04_1.mp3"]},
  {stimuli: ["audio/IJH0430_01_0.mp3", "audio/IJH0430_01_1.mp3"]},
  {stimuli: ["audio/IJH0431_02_0.mp3", "audio/IJH0431_02_1.mp3"]},
  {stimuli: ["audio/IJH0432_04_0.mp3", "audio/IJH0432_04_1.mp3"]},
  {stimuli: ["audio/IJH0435_03_0.mp3", "audio/IJH0435_03_1.mp3"]},
  {stimuli: ["audio/IJH0435_04_0.mp3", "audio/IJH0435_04_1.mp3"]},
  {stimuli: ["audio/IJH0440_02_0.mp3", "audio/IJH0440_02_1.mp3"]},
  {stimuli: ["audio/IJH0446_04_0.mp3", "audio/IJH0446_04_1.mp3"]},
  {stimuli: ["audio/IJH0450_05_0.mp3", "audio/IJH0450_05_1.mp3"]},
  {stimuli: ["audio/IJH0452_01_0.mp3", "audio/IJH0452_01_1.mp3"]},
  {stimuli: ["audio/IJH0452_03_0.mp3", "audio/IJH0452_03_1.mp3"]},
  {stimuli: ["audio/IJH0455_04_0.mp3", "audio/IJH0455_04_1.mp3"]},
  {stimuli: ["audio/IJH0457_04_0.mp3", "audio/IJH0457_04_1.mp3"]},
  {stimuli: ["audio/IJH0461_04_0.mp3", "audio/IJH0461_04_1.mp3"]},
  {stimuli: ["audio/IJH0462_01_0.mp3", "audio/IJH0462_01_1.mp3"]},
  {stimuli: ["audio/IJH0465_02_0.mp3", "audio/IJH0465_02_1.mp3"]},
  {stimuli: ["audio/IJH0466_04_0.mp3", "audio/IJH0466_04_1.mp3"]},
  {stimuli: ["audio/IJS0054_02_0.mp3", "audio/IJS0054_02_1.mp3"]},
  {stimuli: ["audio/IJS0054_03_0.mp3", "audio/IJS0054_03_1.mp3"]},
  {stimuli: ["audio/ILB0162_01_0.mp3", "audio/ILB0162_01_1.mp3"]},
  {stimuli: ["audio/ILB0164_01_0.mp3", "audio/ILB0164_01_1.mp3"]},
  {stimuli: ["audio/ILB0164_02_0.mp3", "audio/ILB0164_02_1.mp3"]},
  {stimuli: ["audio/ILB0164_03_0.mp3", "audio/ILB0164_03_1.mp3"]},
  {stimuli: ["audio/ILB0164_04_0.mp3", "audio/ILB0164_04_1.mp3"]},
  {stimuli: ["audio/ILB0168_03_0.mp3", "audio/ILB0168_03_1.mp3"]},
  {stimuli: ["audio/ILB0169_01_0.mp3", "audio/ILB0169_01_1.mp3"]},
  {stimuli: ["audio/ILB0169_03_0.mp3", "audio/ILB0169_03_1.mp3"]},
  {stimuli: ["audio/ILB0171_03_0.mp3", "audio/ILB0171_03_1.mp3"]},
  {stimuli: ["audio/ILB0172_04_0.mp3", "audio/ILB0172_04_1.mp3"]},
  {stimuli: ["audio/ILB0173_01_0.mp3", "audio/ILB0173_01_1.mp3"]},
  {stimuli: ["audio/ILB0175_03_0.mp3", "audio/ILB0175_03_1.mp3"]},
  {stimuli: ["audio/ILB0177_01_0.mp3", "audio/ILB0177_01_1.mp3"]},
  {stimuli: ["audio/ILB0178_03_0.mp3", "audio/ILB0178_03_1.mp3"]},
  {stimuli: ["audio/ILB0179_04_0.mp3", "audio/ILB0179_04_1.mp3"]},
  {stimuli: ["audio/ILB0191_01_0.mp3", "audio/ILB0191_01_1.mp3"]},
  {stimuli: ["audio/ILB0192_02_0.mp3", "audio/ILB0192_02_1.mp3"]},
  {stimuli: ["audio/ILB0193_01_0.mp3", "audio/ILB0193_01_1.mp3"]},
  {stimuli: ["audio/ILB0325_01_0.mp3", "audio/ILB0325_01_1.mp3"]},
  {stimuli: ["audio/ILB0325_02_0.mp3", "audio/ILB0325_02_1.mp3"]},
  {stimuli: ["audio/ILB0326_01_0.mp3", "audio/ILB0326_01_1.mp3"]},
  {stimuli: ["audio/ILB0326_02_0.mp3", "audio/ILB0326_02_1.mp3"]},
  {stimuli: ["audio/ILB0326_04_0.mp3", "audio/ILB0326_04_1.mp3"]},
  {stimuli: ["audio/ILB0328_03_0.mp3", "audio/ILB0328_03_1.mp3"]},
  {stimuli: ["audio/IMM0050_07_0.mp3", "audio/IMM0050_07_1.mp3"]},
  {stimuli: ["audio/IMR0030_02_0.mp3", "audio/IMR0030_02_1.mp3"]},
  {stimuli: ["audio/IRS0102_06_0.mp3", "audio/IRS0102_06_1.mp3"]},
  {stimuli: ["audio/IRV0083_01_0.mp3", "audio/IRV0083_01_1.mp3"]},
  {stimuli: ["audio/IWM0405_02_0.mp3", "audio/IWM0405_02_1.mp3"]},
  {stimuli: ["audio/IWM0407_02_0.mp3", "audio/IWM0407_02_1.mp3"]},
  {stimuli: ["audio/IWM0409_01_0.mp3", "audio/IWM0409_01_1.mp3"]},
  {stimuli: ["audio/IWM0412_02_0.mp3", "audio/IWM0412_02_1.mp3"]},
  {stimuli: ["audio/IWM0412_03_0.mp3", "audio/IWM0412_03_1.mp3"]},
  {stimuli: ["audio/IWM0418_03_0.mp3", "audio/IWM0418_03_1.mp3"]}
];


/* Shuffle and create blocks */
var shuffled_stimuli = jsPsych.randomization.shuffle(audio_stimuli);

var n = Math.floor(shuffled_stimuli.length / 4);
var block_1 = shuffled_stimuli.slice(0, n);
var block_2 = shuffled_stimuli.slice(n, (2 * n));
var block_3 = shuffled_stimuli.slice((2 * n), (3 * n));
var block_4 = shuffled_stimuli.slice((3 * n));



/* ================================================================= */
/* Welcome, Ethics and All Instructions Text                         */
/* ================================================================= */

/* Landing page and information sheet */
var info_sheet = [
  "<h1>Musical Phrase Comparison Test</h1>"+
  "<p><i>Welcome to the study.</i></p><br/>"+
  "<p>For this study you will need to be in a quiet environment.</p>"+
  "<p>Please turn off any background music or other distractions.</p>"+
  "<p>Headphones are recommended.",

  "<h2>Information for participants</h2>"+
  "<p>We would like to invite you to be part of this research project, if you would like to. "+
  "You should only agree to take part if you want to, it is entirely up to you. "+
  "If you choose not to take part, there won’t be any disadvantages for you and you will hear no more about it.</p>"+
  "<p>Please read the following information carefully before you decide to take part; this will tell you why the research is being done and what you will be asked to do if you take part. "+
  "Please ask if there is anything that is not clear or if you would like more information. "+
  "If you decide to take part, you will be asked to accept the following consent sheet. "+
  "You are still free to withdraw at any time and without giving a reason.</p>"+
  "<p><i>"+
  "This research plans to investigate listeners' abilities to judge how short musical phrases are related. "+
  "You will be asked to listen to 100 pairs of very short musical passages, and for each pair give a rating for the extent to which you think they both come from the same orignial piece. "+
  "You will then be asked to complete a questionnaire on your musical interests and activities. "+
  "The whole study should take under 45 minutes to complete."+
  "</i></p>"+
  "<p>If you have any questions or concerns about the manner in which the study was conducted, or you have any questions relating to data protection, in the first instance, contact the researcher responsible for the study. "+
  "If this is unsuccessful, or not appropriate, please contact the Secretary at the Queen Mary Ethics of Research Committee, Room W104, Queens Building, Mile End Campus, Mile End Road, London, or <a href=mailto:research-ethics@qmul.ac.uk> <tt>research-ethics@qmul.ac.uk</tt></a>.</p>"
];

/* Ethics consent sheet */
var consent_sheet = [
  "<h2>Musical Phrase Comparison Test</h2>"+
  "<p>Queen Mary Ethics of Research Committee Ref: 00000</p>"+
  "<p>Thank you for considering taking part in this research.</p>"+
  "<p>The person organizing the research must explain the project to you before you agree to take part.</p>"+
  "<p>If you have any questions arising from the Participant Information Sheet or explanation already given to you, please ask the researcher before you decide whether to join in.</p>"+
  "<p>I understand that if I decide at any other time during the research that I no longer wish to participate in this project, I can notify the researchers involved and be withdrawn from it immediately.</p>"+
  "<p>I consent to the processing of my personal information for the purposes of this research study.</p>"+
  "<p>I understand that such information will be treated as strictly confidential and handled in accordance with the provisions of Relevant Data Protection Legislation.</p>"+
  "<p>By clicking \“I Agree\” I agree that the research project named above has been explained to me to my satisfaction and I agree to take part in the study. I have read, both the notes written above and the Participant Information Sheet, about the project and understand what the research study involves.</p>"
];

/* General instructions */
/* PART I: Rating Instructions */
var instructions_1a = [
  '<p style="text-align: center">Thank you for agreeing to take part in this study. </p>'+
  '<p><br/></p>'+
  '<p style="text-align: center">Please test that your audio works and set the volume to a comfortable level on your device:</p>'+
  '<div style="text-align: center"><button onclick="play_vol_test()" class="jspsych-btn">Play Audio</button></div>',

  '<p>The study has two main parts: </p>'+
  '<p>In the first part (<i>approx. 30 minutes</i>), you shall be asked to compare and rate pairs of short excerpts of music. </p>'+
  '<p>In the second (<i>approx. 10 minutes</i>), you shall be asked to complete survey questions about your musical abilities and interests. </p>'+
  '<p style="visibility: hidden">Your progression throughout the study will be shown by the green bar at the top of the page. </p>',

  '<p>The study has two main parts: </p>'+
  '<p>In the first part (<i>approx. 30 minutes</i>), you shall be asked to compare and rate pairs of short excerpts of music. </p>'+
  '<p>In the second (<i>approx. 10 minutes</i>), you shall be asked to complete survey questions about your musical abilities and interests. </p>'+
  '<p>Your progression throughout the study will be shown by the green bar at the top of the page. </p>',

  '<h2>Part 1</h2>'+
  '<p>For this task, you shall be played two short passages of music—played once, one after the other, with a short gap in-between. '+
  'Passages are not always complete musical phrases. </p>'+
  '<p style="visibility: hidden">The two excerpts may be taken from the same original piece, or they may be from different pieces. </p>'+
  '<p style="visibility: hidden">You are asked to rate the pair on <b>what extent you think they are taken from the same original piece</b>. </p>'+
  '<p style="visibility: hidden">Please give your rating on the slider, ranging from <b>“same piece”</b> to <b>“different pieces”</b>. </p>'+
  '<p style="visibility: hidden">For each pair, you are required to listen to both passages in full before submitting a rating, and the slider needs to be moved. </p>'+
  '<p style="visibility: hidden">Additionally, you shall be asked if you recognise either excerpt as belonging to a piece of music that is known to you, if so, please select the relevant option. </p>'+
  '<p style="visibility: hidden">First, you shall be presented with two examples…</p>',

  '<h2>Part 1</h2>'+
  '<p>For this task, you shall be played two short passages of music—played once, one after the other, with a short gap in-between. '+
  'Passages are not always complete musical phrases. </p>'+
  '<p>The two excerpts may be taken from the same original piece, or they may be from different pieces. </p>'+
  '<p style="visibility: hidden">You are asked to rate the pair on <b>what extent you think they are taken from the same original piece</b>. </p>'+
  '<p style="visibility: hidden">Please give your rating on the slider, ranging from <b>“same piece”</b> to <b>“different pieces”</b>. </p>'+
  '<p style="visibility: hidden">For each pair, you are required to listen to both passages in full before submitting a rating, and the slider needs to be moved. </p>'+
  '<p style="visibility: hidden">Additionally, you shall be asked if you recognise either excerpt as belonging to a piece of music that is known to you, if so, please select the relevant option. </p>'+
  '<p style="visibility: hidden">First, you shall be presented with two examples…</p>',

  '<h2>Part 1</h2>'+
  '<p>For this task, you shall be played two short passages of music—played once, one after the other, with a short gap in-between. '+
  'Passages are not always complete musical phrases. </p>'+
  '<p>The two excerpts may be taken from the same original piece, or they may be from different pieces. </p>'+
  '<p>You are asked to rate the pair on <b>what extent you think they are taken from the same original piece</b>. </p>'+
  '<p>Please give your rating on the slider, ranging from <b>“same piece”</b> to <b>“different pieces”</b>. </p>'+
  '<p style="visibility: hidden">For each pair, you are required to listen to both passages in full before submitting a rating, and the slider needs to be moved. </p>'+
  '<p style="visibility: hidden">Additionally, you shall be asked if you recognise either excerpt as belonging to a piece of music that is known to you, if so, please select the relevant option. </p>'+
  '<p style="visibility: hidden">First, you shall be presented with two examples…</p>',

  '<h2>Part 1</h2>'+
  '<p>For this task, you shall be played two short passages of music—played once, one after the other, with a short gap in-between. '+
  'Passages are not always complete musical phrases. </p>'+
  '<p>The two excerpts may be taken from the same original piece, or they may be from different pieces. </p>'+
  '<p>You are asked to rate the pair on <b>what extent you think they are taken from the same original piece</b>. </p>'+
  '<p>Please give your rating on the slider, ranging from <b>“same piece”</b> to <b>“different pieces”</b>. </p>'+
  '<p>For each pair, you are required to listen to both passages in full before submitting a rating, and the slider needs to be moved. </p>'+
  '<p style="visibility: hidden">Additionally, you shall be asked if you recognise either excerpt as belonging to a piece of music that is known to you, if so, please select the relevant option. </p>'+
  '<p style="visibility: hidden">First, you shall be presented with two examples…</p>',

  '<h2>Part 1</h2>'+
  '<p>For this task, you shall be played two short passages of music—played once, one after the other, with a short gap in-between. '+
  'Passages are not always complete musical phrases. </p>'+
  '<p>The two excerpts may be taken from the same original piece, or they may be from different pieces. </p>'+
  '<p>You are asked to rate the pair on <b>what extent you think they are taken from the same original piece</b>. </p>'+
  '<p>Please give your rating on the slider, ranging from <b>“same piece”</b> to <b>“different pieces”</b>. </p>'+
  '<p>For each pair, you are required to listen to both passages in full before submitting a rating, and the slider needs to be moved. </p>'+
  '<p>Additionally, you shall be asked if you recognise either excerpt as belonging to a piece of music that is known to you, if so, please select the relevant option. </p>'+
  '<p style="visibility: hidden">First, you shall be presented with two examples…</p>',

  '<h2>Part 1</h2>'+
  '<p>For this task, you shall be played two short passages of music—played once, one after the other, with a short gap in-between. '+
  'Passages are not always complete musical phrases. </p>'+
  '<p>The two excerpts may be taken from the same original piece, or they may be from different pieces. </p>'+
  '<p>You are asked to rate the pair on <b>what extent you think they are taken from the same original piece</b>. </p>'+
  '<p>Please give your rating on the slider, ranging from <b>“same piece”</b> to <b>“different pieces”</b>. </p>'+
  '<p>For each pair, you are required to listen to both passages in full before submitting a rating, and the slider needs to be moved. </p>'+
  '<p>Additionally, you shall be asked if you recognise either excerpt as belonging to a piece of music that is known to you, if so, please select the relevant option. </p>'+
  '<p>First, you shall be presented with two examples…</p>'
];

var instructions_1b = [
  "<p>There are 100 pairs in total, split into four blocks of 25.</p>"+
  "<p>You are asked to have a short rest of at least 30 seconds between each block.</p>"+
  "<br/>"+
  "<p>Please rate the following pairs. </p>"+
  "<p><b>Note:</b><br/><i>You will not be able to continue until both passages have been played, and the slider moved.</i> </p>"+
  "<br/>"+
  "<p>[Click NEXT to start]</p>"
];


/* PART II: GoldMSI Instructions */
var instructions_2 = [
  '<h3>Part 1 Complete</h3>'+
  '<p>Thank you for your responses.</p>'+
  '<p>[Click NEXT to continue to the second part]</p>',

  '<h2>Part 2</h2>'+
  'For this part you shall be asked to complete survey questions about your musical abilities and interests (<i>approx. 10 minutes</i>).'+
  '<p style="visibility: hidden">Please respond to the following statements. </p>'+
  '<p style="visibility: hidden">[Click NEXT to start]</p>',

  '<h2>Part 2</h2>'+
  'For this part you shall be asked to complete survey questions about your musical abilities and interests (<i>approx. 10 minutes</i>).'+
  '<p>Please respond to the following statements. </p>'+
  '<p>[Click NEXT to start]</p>'
];


/* End page */
var end_page = (
  '<h1 style="text-align: center">Study Complete</h1>'+
  '<p style="text-align: center"><i>Thank you for participating in this study.</i></p>'+
  '<p style="text-align: center">Please click the button below to return to Prolific to mark the study as being completed.</p>'+
  '<div style="text-align: center"><a href='+completion_url+' class="jspsych-btn">Complete on Prolific</a></div>'+
  '<p style="text-align: center">If you wish to know more about the purpose of this study, please read the <a href="participant-information.pdf" target="_blank" style="color:blue">information sheet here</a>.</p>'+
  '<br/><hr><br/><br/>'+
  '<img src="http://music-cognition2.eecs.qmul.ac.uk/wp-content/uploads/sites/38/2017/11/logo-1.png" alt="Music Cognition Lab" width="400" style="display: block; margin-left: auto; margin-right: auto; object-position: 45px 0;"><br/>'+
  '<img src="https://www.qmul.ac.uk/qm-resources/logos/QM144BlueOnWhite.gif" alt="Queen Mary University of London" width="300" style="display: block; margin-left: auto; margin-right: auto;">'
);


/* Volume test buttom */
var vol_test = new Audio();
function play_vol_test() {
    vol_test.pause();
    vol_test = new Audio("audio/vol.mp3");
    vol_test.play();
};

/* ================================================================= */
/* Start Timeline                                                    */
/* ================================================================= */

/* Timeline and progress bar */
var timeline = [];
var progress = 0;
var prog_len = 5 + audio_stimuli.length;


/* Landing page and Information Sheet */
timeline.push({
  type: 'instructions',
  pages: info_sheet,
  show_clickable_nav: true,
});

/* Ethics consent sheet */
timeline.push({
    type: 'html-button-response',
    stimulus: consent_sheet[0],
    choices: ["I Agree"]
});



/* ================================================================= */
/* PART I: Similarity Task                                           */
/* ================================================================= */

/* General instructions and Part I */
timeline.push({
  type: 'instructions',
  pages: instructions_1a,
  show_clickable_nav: true,
});

/* Eaxmples */
// Example 1
timeline.push({
  type: 'audio-similarity-slider',
  stimuli: ["audio/ex_1_0.mp3", "audio/ex_1_1.mp3"],
  shuffle: false,
  question: '<u>Example 1</u>:<br/>This pair could be rated strongly as being from the same piece:',
  start_gap: 1000,
  mid_gap: 500,
  end_gap: 0,
  labels: ['<b>Same Piece</b>', '<b>Different Pieces</b>'],
  prompt: '<p><i>(You will need to listen to both excerpts before being able to continue)</i></p>',
  slider_width: 500,
  start: 10,
  require_movement: false,
  require_full: true,
  on_finish: function() {
    save_trial_data();
  }
});

// Example 2
timeline.push({
  type: 'audio-similarity-slider',
  stimuli: ["audio/ex_2_0.mp3", "audio/ex_2_1.mp3"],
  shuffle: false,
  question: '<u>Example 2</u>:<br/>This pair could be rated strongly as being from different pieces:',
  start_gap: 1000,
  mid_gap: 500,
  end_gap: 0,
  labels: ['<b>Same Piece</b>', '<b>Different Pieces</b>'],
  prompt: '<p><i>(You will need to listen to both excerpts before being able to continue)</i></p>',
  slider_width: 500,
  start: 90,
  require_movement: false,
  require_full: true,
  on_finish: function() {
    save_trial_data();
  }
});

/* Instructions 1b */
timeline.push({
  type: 'instructions',
  pages: instructions_1b,
  show_clickable_nav: true,
});


/* BLOCK 1 */

// Task instance
var task_block_1 = {
  type: 'audio-similarity-slider',
  stimuli: jsPsych.timelineVariable('stimuli'),
  shuffle: shuffle_pairs,
  question: 'To what extent are these two excerpts from the same piece?',
  start_gap: 1000,
  mid_gap: 500,
  end_gap: 500,
  labels: ['<b>Same Piece</b>', '<b>Different Pieces</b>'],
  slider_width: 500,
  require_movement: true,
  require_full: true,
  prompt: '<p><i>Please move the slider to give your rating.</i></p>',
  on_finish: function() {
    save_trial_data();
    progress += 1;
    jsPsych.setProgressBar(progress / prog_len)
  }
};

// Add all to timeline
timeline.push({
  timeline: [task_block_1],
  timeline_variables: block_1
});

// Display rest period
timeline.push({
  type: 'rest-period',
  stimulus: '<h3>Block 1 Complete</h3><p>Thank you for your responses. Please take a short rest.</p>',
  choices: ['Continue']
});


/* BLOCK 2 */

// Task instance
var task_block_2 = {
  type: 'audio-similarity-slider',
  stimuli: jsPsych.timelineVariable('stimuli'),
  shuffle: shuffle_pairs,
  question: 'To what extent are these two excerpts from the same piece?',
  start_gap: 1000,
  mid_gap: 500,
  end_gap: 500,
  labels: ['<b>Same Piece</b>', '<b>Different Pieces</b>'],
  slider_width: 500,
  require_movement: true,
  require_full: true,
  prompt: '<p><i>Please move the slider to give your rating.</i></p>',
  on_finish: function() {
    save_trial_data();
    progress += 1;
    jsPsych.setProgressBar(progress / prog_len)
  }
};

// Add all to timeline
timeline.push({
  timeline: [task_block_2],
  timeline_variables: block_2
});

// Display rest period
timeline.push({
  type: 'rest-period',
  stimulus: '<h3>Block 2 Complete</h3><p>Thank you for your responses. Please take a short rest.</p>',
  choices: ['Continue']
});


/* BLOCK 3 */

// Task instance
var task_block_3 = {
  type: 'audio-similarity-slider',
  stimuli: jsPsych.timelineVariable('stimuli'),
  shuffle: shuffle_pairs,
  question: 'To what extent are these two excerpts from the same piece?',
  start_gap: 1000,
  mid_gap: 500,
  end_gap: 500,
  labels: ['<b>Same Piece</b>', '<b>Different Pieces</b>'],
  slider_width: 500,
  require_movement: true,
  require_full: true,
  prompt: '<p><i>Please move the slider to give your rating.</i></p>',
  on_finish: function() {
    save_trial_data();
    progress += 1;
    jsPsych.setProgressBar(progress / prog_len)
  }
};

// Add all to timeline
timeline.push({
  timeline: [task_block_3],
  timeline_variables: block_3
});

// Display rest period
timeline.push({
  type: 'rest-period',
  stimulus: '<h3>Block 3 Complete</h3><p>Thank you for your responses. Please take a short rest.</p>',
  choices: ['Continue']
});


/* BLOCK 4 */

// Task instance
var task_block_4 = {
  type: 'audio-similarity-slider',
  stimuli: jsPsych.timelineVariable('stimuli'),
  shuffle: shuffle_pairs,
  question: 'To what extent are these two excerpts from the same piece?',
  start_gap: 1000,
  mid_gap: 500,
  end_gap: 500,
  labels: ['<b>Same Piece</b>', '<b>Different Pieces</b>'],
  slider_width: 500,
  require_movement: true,
  require_full: true,
  prompt: '<p><i>Please move the slider to give your rating.</i></p>',
  on_finish: function() {
    save_trial_data();
    progress += 1;
    jsPsych.setProgressBar(progress / prog_len)
  }
};

// Add all to timeline
timeline.push({
  timeline: [task_block_4],
  timeline_variables: block_4
});



/* ================================================================= */
/* PART II: GoldMSI Questions                                        */
/* ================================================================= */

/* PART II instructions */
// Save all interaction data
timeline.push({
  type: 'instructions',
  pages: instructions_2,
  show_clickable_nav: true
});


/* Scale choices */
var gmsi_scale = [
  "Completely<br/>Disagree",
  "Strongly<br/>Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly<br/>Agree",
  "Completely<br/>Agree"
];

/* Stimuli */
var gmsi1 = [
  {prompt: "I spend a lot of my free time doing music-related activities.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I sometimes choose music that can trigger shivers down my spine.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I enjoy writing about music, for example on blogs and forums.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "If somebody starts singing a song I don't know, I can usually join in.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I am able to judge whether someone is a good singer or not.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I usually know when I'm hearing a song for the first time.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I can sing or play music from memory.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I'm intrigued by musical styles I'm not familiar with and want to find out more.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "Pieces of music rarely evoke emotions for me.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I am able to hit the right notes when I sing along with a recording.",
  labels: gmsi_scale, required: require_answer}
];

var gmsi2 = [
  {prompt: "I find it difficult to spot mistakes in a performance of a song<br/>even if I know the tune.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I can compare and discuss differences between two performances or versions<br/>of the same piece of music.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I have trouble recognizing a familiar song when played in a different way<br/>or by a different performer.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I have never been complimented for my talents as a musical performer.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I often read or search the internet for things related to music.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I often pick certain music to motivate or excite me.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I am not able to sing in harmony when somebody is singing a familiar tune.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I can tell when people sing or play out of time with the beat.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I am able to identify what is special about a given musical piece.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I am able to talk about the emotions that a piece of music evokes for me.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I don't spend much of my disposable income on music.",
  labels: gmsi_scale, required: require_answer}
];

var gmsi3 = [
  {prompt: "I can tell when people sing or play out of tune.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "When I sing, I have no idea whether I'm in tune or not.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "Music is kind of an addiction for me – I couldn't live without it.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I don’t like singing in public because I’m afraid that I would sing wrong notes.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "When I hear a music I can usually identify its genre.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I would not consider myself a musician.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I keep track of new of music that I come across (e.g. new artists or recordings).",
  labels: gmsi_scale, required: require_answer},
  {prompt: "After hearing a new song two or three times, I can usually sing it by myself.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "I only need to hear a new tune once and I can sing it back hours later.",
  labels: gmsi_scale, required: require_answer},
  {prompt: "Music can evoke my memories of past people and places.",
  labels: gmsi_scale, required: require_answer}
];

var gmsi4 = [
  {prompt: "I engaged in regular, daily practice of a musical instrument<br/>(including voice) for &#9634 years.",
  labels: ["0", "1", "2", "3", "4–5", "6–9", "10+"],
  required: require_answer},
  {prompt: "At the peak of my interest, I practiced &#9634 hours per day<br/>on my primary instrument.",
  labels: ["0", "0.5", "1", "1.5", "2", "3–4", "5+"],
  required: require_answer},
  {prompt: "I have attended &#9634 live music events as an audience member<br/>in the past twelve months.",
  labels: ["0", "1", "2", "3", "4–6", "7–10", "11+"],
  required: require_answer},
  {prompt: "I have had formal training in music theory for &#9634 years.",
  labels: ["0", "0.5", "1", "2", "3", "4–6", "7+"],
  required: require_answer},
  {prompt: "I have had &#9634 years of formal training on a musical instrument<br/>(including voice) during my lifetime.",
  labels: ["0", "0.5", "1", "2", "3–5", "6–9", "10+"],
  required: require_answer},
  {prompt: "I can play &#9634 musical instruments (including voice).",
  labels: ["0", "1", "2", "3", "4", "5", "6+"],
  required: require_answer},
  {prompt: "I listen attentively to music for &#9634 per day.",
  labels: ["0–15 mins", "15–30 mins", "30–60 mins", "1–1.5 hrs", "2 hrs", "2–3 hrs", "4+ hrs"],
  required: require_answer}
];

/* Trials */
timeline.push({
  type: 'survey-likert',
  questions: gmsi1,
  scale_width: 600,
  on_finish: function() {
    save_trial_data();
    progress += 1;
    jsPsych.setProgressBar(progress / prog_len)
  }
});

timeline.push({
  type: 'survey-likert',
  questions: gmsi2,
  scale_width: 600,
  on_finish: function() {
    save_trial_data();
    progress += 1;
    jsPsych.setProgressBar(progress / prog_len)
  }
});

timeline.push({
  type: 'survey-likert',
  questions: gmsi3,
  scale_width: 600,
  on_finish: function() {
    save_trial_data();
    progress += 1;
    jsPsych.setProgressBar(progress / prog_len)
  }
});

timeline.push({
  type: 'survey-likert',
  questions: gmsi4,
  scale_width: 600,
  on_finish: function() {
    save_trial_data();
    progress += 1;
    jsPsych.setProgressBar(progress / prog_len)
  }
});

timeline.push({
  type: 'survey-text',
  questions: [
    {prompt: "Genres you listen to?",
    placeholder: "e.g. Jazz, Rock",
    rows: 10,
    columns: 60,
    required: require_answer}
  ],
  on_finish: function() {
    save_trial_data();
    progress += 1;
    jsPsych.setProgressBar(progress / prog_len);
    save_interaction_data();
  }
});



/* ================================================================= */
/* Study End, Save and Run                                           */
/* ================================================================= */

/* Final page */
timeline.push({
  type: 'html-keyboard-response',
  stimulus: end_page,
  choices: jsPsych.NO_KEYS
});


/* Save trial results to MySQL database */
function save_trial_data() {
  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', 'write_data.php');
  // xhr.setRequestHeader('Content-Type', 'application/json');
  // xhr.onload = function() {
  //   if(xhr.status == 200) {
  //     var response = JSON.parse(xhr.responseText);
  //     console.log(response.success);
  //   }
  // };
  // xhr.send(jsPsych.data.getLastTrialData().json());
};


/* Save data on interaction to MySQL database */
function save_interaction_data() {
  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', 'write_data.php');
  // xhr.setRequestHeader('Content-Type', 'application/json');
  // xhr.onload = function() {
  //   if(xhr.status == 200) {
  //     var response = JSON.parse(xhr.responseText);
  //     console.log(response.success);
  //   }
  // };
  // xhr.send(
  //   jsPsych.data.getInteractionData().addToAll(
  //     {participant_id: participant, prolific_pid: pid}
  //   ).json()
  // );
};


/* Run the experiment */
jsPsych.init({
  preload_audio: audio,
  max_preload_attempts: 50,
  use_webaudio: true,
  timeline: timeline,
  show_preload_progress_bar: true,
  show_progress_bar: true,
  auto_update_progress_bar: false,
  message_progress_bar: ''
});
