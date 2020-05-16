/**
 * @Author: Edward Hall <edwardhall>
 * @Date:   2019-07-04T15:00:32+01:00
 * @Email:  edward.hall@qmul.ac.uk
 * @Last modified by:   edwardhall
 * @Last modified time: 2020-04-27T14:41:23+01:00
 */


jsPsych.plugins['audio-similarity-slider'] = (function() {
	var plugin = {};

	jsPsych.pluginAPI.registerPreload('audio-similarity-slider', 'stimuli', 'audio');

	plugin.info = {
		name: 'audio-similarity-slider',
		description: '',
    parameters: {
			stimuli: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Stimuli',
        default: undefined,
				array: true,
        description: 'Second audio file'
      },
			shuffle: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Shuffle',
        default: false,
        description: 'Shuffle stimuli'
      },
			start_gap: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: 'Start gap',
				default: 0,
				description: 'Gap before start (ms)'
			},
			mid_gap: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: 'Mid gap',
				default: 0,
				description: 'Gap between stimuli (ms)'
			},
			end_gap: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: 'End gap',
				default: 0,
				description: 'Gap after stimuli (ms)'
			},
      min: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Min slider',
        default: 0,
        description: 'Sets the minimum value of the slider'
      },
      max: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Max slider',
        default: 100,
        description: 'Sets the maximum value of the slider',
      },
			start: {
				type: jsPsych.plugins.parameterType.INT,
				pretty_name: 'Slider starting value',
				default: 50,
				description: 'Sets the starting value of the slider',
			},
      step: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Step',
        default: 1,
        description: 'Sets the step of the slider'
      },
      labels: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name:'Labels',
        default: [],
        array: true,
        description: 'Labels of the slider.',
      },
      slider_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name:'Slider width',
        default: null,
        description: 'Width of the slider in pixels.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default: 'Continue',
        array: false,
        description: 'Label of the button to advance.'
      },
      require_movement: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Require movement',
        default: false,
        description: 'If true, the participant will have to move the slider before continuing.'
      },
			require_full: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Require full',
        default: false,
        description: 'If true, participant has to listen to all audio'
      },
			question: {
				type: jsPsych.plugins.parameterType.STRING,
				pretty_name: 'Question',
				default: null,
				description: 'Task question displayed at top.'
			},
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the slider.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when user makes a response.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

		// Shuffle stimuli order
		if(trial.shuffle){
			var shuffled_stimuli = jsPsych.randomization.sampleWithoutReplacement(trial.stimuli, 2)
			var stimuli_1 = shuffled_stimuli[0]
			var stimuli_2 = shuffled_stimuli[1]
		} else {
			var stimuli_1 = trial.stimuli[0]
			var stimuli_2 = trial.stimuli[1]
		}

    // setup stimuli
    var context = jsPsych.pluginAPI.audioContext();

    if(context !== null){
      var source_1 = context.createBufferSource();
      source_1.buffer = jsPsych.pluginAPI.getAudioBuffer(stimuli_1);
      source_1.connect(context.destination);

			var source_2 = context.createBufferSource();
			source_2.buffer = jsPsych.pluginAPI.getAudioBuffer(stimuli_2);
			source_2.connect(context.destination);

    } else {
      var audio_1 = jsPsych.pluginAPI.getAudioBuffer(stimuli_1);
      audio_1.currentTime = 0;

			var audio_2 = jsPsych.pluginAPI.getAudioBuffer(stimuli_2);
      audio_2.currentTime = 0;
    }


    // set up end event if trial needs it
    if(trial.trial_ends_after_audio){
      if(context !== null){
        source_1.onended = function() {
          end_trial();
        }
      } else {
        audio_1.addEventListener('ended', end_trial);
      }
    }

		var speaker_off_1 = '<svg width="100" height="100">'
		speaker_off_1 += '<path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style="fill: #ededed; stroke: #ededed; stroke-width: 5; stroke-linejoin: round;"/>'
		speaker_off_1 += '<text x="22" y="43" fill="#fff">1</text>'
		speaker_off_1 += '</svg>'

		var speaker_off_2 = '<svg width="100" height="100">'
		speaker_off_2 += '<path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style="fill: #ededed; stroke: #ededed; stroke-width: 5; stroke-linejoin: round;"/>'
		speaker_off_2 += '<text x="22" y="43" fill="#fff">2</text>'
		speaker_off_2 += '</svg>'

		var speaker_on_1 = '<svg width="100" height="100">'
		speaker_on_1 += '<path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style="fill: #c9e2f5; stroke: #c9e2f5; stroke-width: 5; stroke-linejoin: round;"/>'
		speaker_on_1 += '<path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style="fill:none; stroke: #c9e2f5; stroke-width: 5; stroke-linecap: round"/>'
		speaker_on_1 += '<text x="22" y="43" fill="#fff">1</text>'
		speaker_on_1 += '</svg>'

		var speaker_on_2 = '<svg width="100" height="100">'
		speaker_on_2 += '<path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style="fill: #c9e2f5; stroke: #c9e2f5; stroke-width: 5; stroke-linejoin: round;"/>'
		speaker_on_2 += '<path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style="fill:none; stroke: #c9e2f5; stroke-width: 5; stroke-linecap: round"/>'
		speaker_on_2 += '<text x="22" y="43" fill="#fff">2</text>'
		speaker_on_2 += '</svg>'

		var indicator_1 = '<div id="stimulus_1-indicator" style="float: left; position: relative; left: 30%;">' + speaker_off_1 + '</div>'
		var indicator_2 = '<div id="stimulus_2-indicator" style="float: right; position: relative; right: 20%;">' + speaker_off_2 + '</div>'


    var html = '<div id="jspsych-audio-similarity-slider-wrapper" style="margin: 100px 0px;">';

		if (trial.question !== null){
			html += '<h2>' + trial.question + '</h2><br/>';
		}

		html += '<div id="stimuli-indicators">' + indicator_1 + indicator_2 + '</div>';
  	html += '<br/><div class="jspsych-audio-similarity-slider-container" style="position:relative; margin: 0 auto 3em auto; ';
    if(trial.slider_width !== null){
      html += 'width:'+trial.slider_width+'px;';
    }
    html += '">';
    html += '<input type="range" value="'+trial.start+'" min="'+trial.min+'" max="'+trial.max+'" step="'+trial.step+'" style="width: 100%;" id="jspsych-audio-similarity-slider-response"></input>';
    html += '<div>'
    for(var j=0; j < trial.labels.length; j++){
      var width = 100/(trial.labels.length-1);
      var left_offset = (j * (100 /(trial.labels.length - 1))) - (width/2);
      html += '<div style="display: inline-block; position: absolute; left:'+left_offset+'%; text-align: center; width: '+width+'%;">';
      html += '<span style="text-align: center; font-size: 80%;">'+trial.labels[j]+'</span>';
      html += '</div>'
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';

		if (trial.prompt !== null){
	    html += trial.prompt;
		}

		// Add buttons to indicate recognition of excerpts
		html += '<input type="checkbox" id="similarity-slider-1-known" name="known-1" value="known-1">'
		html += '<label for="known-1"> I know the piece excerpt 1 comes from.</label><br>'
		html += '<input type="checkbox" id="similarity-slider-2-known" name="known-2" value="known-2">'
		html += '<label for="known-2"> I know the piece excerpt 2 comes from.</label><br>'

    // add submit button
		var disable = (trial.require_movement || trial.require_full)
    html += '<button id="jspsych-audio-similarity-slider-next" class="jspsych-btn" '+ (disable ? "disabled" : "") + '>'+trial.button_label+'</button>';

    display_element.innerHTML = html;

    var response = {
      rt: null,
      response: null,
			known_buttons: null,
    };

		// Disable continue button
		var slider_moved = false;
		display_element.querySelector('#jspsych-audio-similarity-slider-response').addEventListener('change', function(){
			slider_moved = true;
		})

		if(trial.require_full){
			setTimeout(function(){
				if(trial.require_movement){
					if(slider_moved){
						display_element.querySelector('#jspsych-audio-similarity-slider-next').disabled = false;
					} else {
						display_element.querySelector('#jspsych-audio-similarity-slider-response').addEventListener('change', function(){
							display_element.querySelector('#jspsych-audio-similarity-slider-next').disabled = false;
						})
					}
				} else {
					display_element.querySelector('#jspsych-audio-similarity-slider-next').disabled = false;
				}
			}, trial.start_gap + (audio_1.duration * 1000) + trial.mid_gap + (audio_2.duration * 1000) + trial.end_gap);
		} else {
			if(trial.require_movement){
				display_element.querySelector('#jspsych-audio-similarity-slider-response').addEventListener('change', function(){
					display_element.querySelector('#jspsych-audio-similarity-slider-next').disabled = false;
				})
			}
		}


    display_element.querySelector('#jspsych-audio-similarity-slider-next').addEventListener('click', function() {
      // measure response time
      var endTime = performance.now();
			var rt = endTime - startTime;
			if(context !== null){
				endTime = context.currentTime;
				rt = Math.round((endTime - startTime) * 1000);
			}
      response.rt = rt;
      response.response = display_element.querySelector('#jspsych-audio-similarity-slider-response').value;
			response.known_buttons = [
				document.getElementById("similarity-slider-1-known").checked,
				document.getElementById("similarity-slider-2-known").checked
			];

      if(trial.response_ends_trial){
        end_trial();
      } else {
        display_element.querySelector('#jspsych-audio-similarity-slider-next').disabled = true;
      }

    });

    function end_trial(){

      jsPsych.pluginAPI.clearAllTimeouts();

			if(context !== null){
        source_1.stop();
        source_1.onended = function() { }
				source_2.stop();
        source_2.onended = function() { }
      } else {
        audio_1.pause();
        audio_1.removeEventListener('ended', end_trial);
				audio_2.pause();
				audio_2.removeEventListener('ended', end_trial);
      }

      // save data
      var trialdata = {
        "rt": response.rt,
				"stimulus_1": stimuli_1,
				"stimulus_2": stimuli_2,
        "response": response.response,
				"known_buttons": JSON.stringify(response.known_buttons)
      };

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trialdata);
    }

		var startTime = performance.now();

		// start audio
    if(context !== null){
      startTime = context.currentTime;
      source_1.start(startTime);
			document.getElementById("stimulus_1-indicator").innerHTML = speaker_on_1;
			source_1.onended = function() {
				document.getElementById("stimulus_1-indicator").innerHTML = speaker_off_1;
				setTimeout(function(){
					// startTime = context.currentTime;
					source_2.start(startTime);
					document.getElementById("stimulus_2-indicator").innerHTML = speaker_on_2;
				}, trial.mid_gap)
			};
			source_2.onended = function() {
				document.getElementById("stimulus_2-indicator").innerHTML = speaker_off_2;
			};
    } else {
			setTimeout(function(){
      	audio_1.play();
				document.getElementById("stimulus_1-indicator").innerHTML = speaker_on_1;
			}, trial.start_gap)
			audio_1.onended = function() {
				document.getElementById("stimulus_1-indicator").innerHTML = speaker_off_1;
				setTimeout(function(){
					audio_2.play();
					document.getElementById("stimulus_2-indicator").innerHTML = speaker_on_2;
				}, trial.mid_gap)
			};
			audio_2.onended = function() {
				document.getElementById("stimulus_2-indicator").innerHTML = speaker_off_2;
			};
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }


  };

  return plugin;
})();
