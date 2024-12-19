import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  testStarted = false;
  questions = [
    { section: 'Personality Traits', question: 'How do you approach deadlines for important tasks?', options: ['I always meet deadlines well ahead of time.', 'I meet deadlines on time.', 'I sometimes miss deadlines but try to catch up.', 'I often struggle to meet deadlines.'] },
    { section: 'Personality Traits', question: 'How often do you follow through on promises you make to others?', options: ['Always', 'Most of the time', 'Sometimes', 'Rarely'] },
    { section: 'Personality Traits', question: 'How do you handle unexpected expenses?', options: ['I have savings set aside for such situations.', 'I cut back on other expenses to cover them.', 'I rely on credit or loans.', 'I often struggle to manage them.'] },
    { section: 'Cognitive Abilities', question: 'When faced with a financial problem, what is your approach?', options: ['I analyze the situation and create a plan.', 'I seek advice from others.', 'I make a quick decision based on instinct.', 'I tend to avoid dealing with it immediately.'] },
    { section: 'Cognitive Abilities', question: 'How do you plan your monthly budget?', options: ['I have a detailed budget and track expenses closely.', 'I have a general budget but don’t track every expense.', 'I plan my budget only for major expenses.', 'I don’t have a budget.'] },
    { section: 'Behavioral Traits', question: 'How comfortable are you with taking financial risks?', options: ['Very comfortable', 'Somewhat comfortable', 'Slightly uncomfortable', 'Very uncomfortable'] },
    { section: 'Behavioral Traits', question: 'How regularly do you save a portion of your income?', options: ['Every month without fail', 'Most months', 'Occasionally', 'Rarely or never'] },
    { section: 'Behavioral Traits', question: 'How do you manage your debt payments?', options: ['I pay more than the minimum amount required.', 'I pay the minimum amount required.', 'I sometimes miss payments but catch up later.', 'I often miss payments and struggle to catch up.'] },
    { section: 'Financial Knowledge and Attitudes', question: 'How well do you understand how credit works?', options: ['Very well', 'Somewhat well', 'Not very well', 'Not at all'] },
    { section: 'Financial Knowledge and Attitudes', question: 'How do you view taking out loans?', options: ['As a necessary tool for managing finances', 'As something to be used cautiously', 'As a last resort', 'As something to avoid completely'] }
  ];
  currentQuestionIndex = 0;
  selectedOption: string;

  constructor() { }

  ngOnInit() {
  }

  startTest() {
    this.testStarted = true;
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  nextQuestion() {
    if (this.selectedOption) {
      this.currentQuestionIndex++;
      this.selectedOption = null;
    } else {
      alert('Please select an option before proceeding.');
    }
  }
}
