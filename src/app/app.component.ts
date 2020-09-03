import { Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from '../../node_modules/ngx-bootstrap';
import { QuestionClass } from './question-class';
import { ToastrService } from 'ngx-toastr';




@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	isQuestionCardShow: boolean = false;
	totalAnswered: number = 0;
	rightAnswer: number=0;
	questionObj = new QuestionClass();
	@ViewChild('submitModal') submitModal: ModalDirective;
	@ViewChild('answerModal') answerModal : ModalDirective;
	@ViewChild('questionForm') questionForm: any;
	@ViewChild('questionTest') questionTest : any;

	constructor( private toastr: ToastrService) { }

	answerArray = [];

	allQuestions: any = [{
		"id": 1,
		"question": "Which Of The Following Is More Detailed Document",
		"a": "Curriculum Vitae",
		"b": "Resume",
		"answer": "b"
	},
	{
		"id": 2,
		"question": "What % of recruiters reject the candidates based on unprofessional Email ID?",
		"a": "51%",
		"b": "76%",
		"c": "84%",
		"d": "90%",
		"answer": "b"
	},
	{
		"id": 3,
		"question": "Which of the following formatting options should be used in a Resume?",
		"a": "Using Colors to highlight data",
		"b": "Using Infographics",
		"c": "Using Bold To Highlight Data",
		"d": "Using Paragraphs to describe Work Experience",
		"answer": "a"
	},
	{
		"id": 4,
		"question": "Which of the following should be included on your Resume?",
		"a": "Fine",
		"b": "Not Fine",
		"c": "Very Fine",
		"d": "Get Lost",
		"answer": "b"
	},
	{
		"id": 5,
		"question": "State True or False: Once the recruiter has gone through your Resume, he will not prefer going through your LinkedIn Profile",
		"a": "True",
		"b": "False",
		"answer": "b"
	},
	{
		"id": 6,
		"question": "Case: I want to apply for a position of Professor at a University. Which document will be applicable to me?",
		"a": "Curriculum Vitae",
		"b": "Resume",
		"answer": "b"
	},
	{
		"id": 7,
		"question": "How much time does a recruiter give to every Resume?",
		"a": "5-7 Seconds",
		"b": "5-7 Minutes",
		"answer": "b"
	},
	{
		"id": 8,
		"question": "Case: I am very passionate about dancing and have also taken formal training in classical dance. I have won prestigious awards for my performances. Should I mention about Dancing as a Hobby in my Resume?",
		"a": "Yes",
		"b": "No",
		"answer": "b"
	},
	{
		"id": 9,
		"question": "State True or False: Resume should include every single job you have ever held",
		"a": "True",
		"b": "False",
		"answer": "b"
	},
	{
		"id": 10,
		"question": "State True or False: Some European countries may use the terms CV and Resume interchangeably. ",
		"a": "True",
		"b": "False",
		"answer": "b"
	}

	
	];

	/**Method call on submit the test */
	submitTest() {
		this.rightAnswer = 0;
		this.totalAnswered = 0;
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
					this.rightAnswer++;
				}
			}

		}
		this.submitModal.show();

	}

	startQuiz() {
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i]) {
				delete this.allQuestions[i]["selected"];
			}

		}
		this.questionTest.reset();
		this.isQuestionCardShow = true;

	}
	HomePage() {
		this.isQuestionCardShow = false;
	}
	addQuestion(){
		// this.addQuestionModal.show();
	}
	// submitAddQuestion(){
	// 	let quesTemp = JSON.parse(JSON.stringify(this.questionObj));
	// 	quesTemp["id"] = this.allQuestions.length+1;
	// 	this.allQuestions.push(quesTemp);
	// 	this.questionForm.reset();
	// 	this.toastr.success("Question Added Successfully!!");
	// 	// this.addQuestionModal.hide();

	// }
	checkAnswers(){
		this.submitModal.hide();
		this.answerModal.show();
	}

	

 

	ngOnInit() {



	}

}
