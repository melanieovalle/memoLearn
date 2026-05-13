const cards = [
  {
    wrapperClass: "welcome-page",
    lessonName: "human computer interaction",
    title: "Welcome to Human Computer Interaction!",
    content: `
      <p>This material is designed to break down complex concepts into smaller, more accessible parts,
      allowing you to build your knowledge progressively...</p>
      <ul>
        <li>Real World scenarios</li>
        <li>User, Task, and Context Analysis</li>
        <li>Cognitive Biases</li>
      </ul>
      <p>Why should I care?</p>
      <p>Well... Human Computer Interaction is what makes technology actually usable.</p>
        <p>It helps you design systems that people can understand, trust, and enjoy using.
        Without HCI, even powerful software can feel confusing or frustrating.</p>
        <p>Understanding users, their goals, and their limitations allows you to build
        better products, avoid common design mistakes, and create experiences that
        feel intuitive instead of overwhelming.</p>
    `,
    backLabel: "Wait, I didn't want to study this",
    backHref: "index.html",
  },
  {
    wrapperClass: "real-world",
    title: "Real world applications:",
    content: `
    <p>When it comes to designing apps, websites, and everyday technology, Human Computer Interaction plays a key role.</p>
    <p>It helps create intuitive interfaces for things like mobile apps, medical systems,
    banking platforms, and even car dashboards.</p>
    <p>By understanding users, tasks, and context, designers can improve usability,
    reduce errors, and make technology more accessible and efficient for everyone.</p>
    `,
    backLabel: "Wait, I didn't want to study this",
    backHref: "index.html",
  },
  {
    wrapperClass: "user-analysis-page",
    title: "User Analysis",
    content: `
      <div class="inner-box">
        <h4>Personas</h4>
        <p>The creation of personas requires time, research and expertise. However, are beneficial since
         they can humanize users for designers useful for comparing alternatives 
        </p>
        <ul>
            <li>Goal-directed</li>
            <li>Role-based</li>
            <li>Engaging</li>
            <li>Fiction-based: UX team brainstormed person</li>
        </ul>
      </div>
      <div class="inner-box">
        <h4>Stages of skill acquisition</h4>
        <p>
        users at different stages will pursue different tasks
        </p>
        <ul>
            <li>Novice: no experience, follows rules without judgement</li>
            <li>Advanced beginner: notices patterns but weak judgment</li>
            <li>Competent: enough experience to make deliberate choices, still slow</li>
            <li>Proficient: problem recognition becomes automatic to focus on what to do instead of what's going on</li>
            <li>Expert: intuitive performance, might benefit from other experts </li>
        </ul>
      </div>
    `,
    backLabel: "Wait, I didn't want to study this",
    backHref: "index.html",
  },
  {
    wrapperClass: "task-context-analysis-page",
    title: "Task and Context Analysis",
    content: `
    <div class="inner-box">
        <h4>Task Analysis</h4>
        <p>the study of how people perform tasks to achieve their goals </p>
        <ul>
            <li>Goal/task-based: what user wants to do</li>
            <li>Elaborated: more details to highlight context and user characteristics</li>
            <li>Full scale: describe entire situation and steps</li>
        </ul>
    </div>
    <div class="inner-box">
        <h4>Domain Analysis</h4>
        <p>the study of the context the user works in</p>
        <p>Important to know:</p>
        <ul>
            <li>Identify entities</li>
            <li>Similar to classes in Object Oriented Programming (OOP)</li>
        </ul>
    </div>
    `,
    backLabel: "Wait, I didn't want to study this",
    backHref: "index.html",
  },
  {
    wrapperClass: "cognitive-bias-page",
    title: "Cognitive Biases",
    nextLabel: "Let's practice",
    content: `
    <div class="inner-box">
        <h4>False Consensus effect:</h4>
        <p>Overestimating how much others think and feel the same way I do </p>
    </div>
    <div class="inner-box">
        <h4>Fundamental attribution error:</h4>
        <p>What people do reflects who they are as a person rather than circumstances</p>
    </div>
        <div class="inner-box">
        <h4>Confirmation bias:</h4>
        <p>Seeking or interpreting evidence in a way that confirms what I already believe</p>
    </div>
        <div class="inner-box">
        <h4>Social desirability bias:</h4>
        <p>Responding in a certain way that user may think favors them</p>
    </div>
    `,
    backLabel: "Wait, I didn't want to study this",
    backHref: "index.html",
  },
  {
    wrapperClass: "practice",
    title: "Question 1: Which cognitive bias involves overestimating how much others share your views?",
    hideNext: true,
    // hideBack: true,
    content: `
        <p>Select the correct answer</p>
        <div class="answers-container">
        <button class="answer-btn" id="correct-answer"
            data-feedback="Correct! The False Consensus Effect is when we overestimate how much others think and feel the same way we do."
            onclick="window.location.href='answers.html'">
            False Consensus Effect
        </button>
        <button class="answer-btn" id="incorrect-answer"
            data-feedback="Not quite. Confirmation bias is about seeking evidence that confirms existing beliefs. The False Consensus Effect is about assuming others share your views."
            onclick="window.location.href='answers.html'">
            Confirmation Bias
        </button>
        </div>
    `,
    backHref: "index.html",
    backLabel: "Wait, I didn't want to study this",
    nextHref: "answers.html",
    },
];