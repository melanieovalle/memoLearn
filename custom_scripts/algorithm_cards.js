const cards = [
  {
    wrapperClass: "welcome-page",
    title: "Welcome to Introduction to Algorithms!",
    content: `
      <p>This material is designed to break down complex concepts into smaller, more accessible parts,
      allowing you to build your knowledge progressively...</p>
      <ul>
        <li>Real World scenarios</li>
        <li>What are graphs?</li>
        <li>BFS and DFS</li>
      </ul>
      <p>Why should I care?</p>
      <p>Well... Algorithms are a fundamental part of computer science because they define the
      step-by-step process needed to solve problems in a logical and efficient manner...</p>
    `,
    backLabel: "Wait, I didn't want to study this",
    backHref: "index.html",
  },
  {
    wrapperClass: "real-world",
    title: "Real world applications:",
    content: `
      <p>To start with, the algorithms you'll see here have a ton of real-world applications...
      Understanding algorithms means understanding how the technology around you works.</p>
    `,
    backLabel: "Wait, I didn't want to study this",
    backHref: "index.html",
  },
  {
    wrapperClass: "graphs-page",
    header: "Let's dive into Graphs: BFS and DFS!",
    title: "BFS and DFS",
    content: `
      <p>BFS and DFS are two fundamental algorithms used to traverse or search through graphs.</p>
      <div class="inner-box">
        <h4>BFS: Breadth First Search</h4>
        <p>Explores the graph level by level, visiting all neighbors of a node before going deeper.</p>
        <p>It is used for finding the shortest path between two nodes.</p>
      </div>
      <div class="inner-box">
        <h4>DFS: Depth First Search</h4>
        <p>Explores the graph by going as deep as possible down each path.</p>
        <p>Mostly used for detecting cycles, solving mazes, and checking if a path exists.</p>
      </div>
      <div class="inner-box">
        <h4>Important Differences to Understand</h4>
        <p><strong>BFS</strong>: uses a queue, explores wide first, finds shortest path.</p>
        <p><strong>DFS</strong>: uses a stack, explores deep first.</p>
      </div>
    `,
    backLabel: "Wait, I didn't want to study this",
    backHref: "index.html",
  },
  {
    wrapperClass: "practice",
    title: "Question 1: What is the best algorithm to find the shortest paths on graphs?",
    content: `
      <p>Select the correct answer</p>

      <div class = answers-container>
        <button class = "answer-btn" id="correct-answer" onclick="window.location.href='answers.html'">
          BFS
        </button>
        <button class = "answer-btn" id="incorrect-answer" onclick="window.location.href='answers.html'">
          DFS
        </button>
      </div>
    `,
    backLabel: "Wait, I didn't want to study this",
    backHref: "index.html",
  }
];