const cards = [
  {
    wrapperClass: "welcome-page",
    title: "Welcome to Operating Systems!",
    content: `
      <p>This material is designed to break down complex concepts into smaller, more accessible parts,
      allowing you to build your knowledge progressively...</p>
      <ul>
        <li>Real World scenarios</li>
        <li>What are threads and processes</li>
        <li>Multi-processor vs uniprocessor</li>
      </ul>
      <p>Why should I care?</p>
      <p>Well... understanding operating systems is crucial for your CS career! It provides a 
      foundational understanding of how software interacts with hardware. More specifically 
      understanding how processes/threads run simultaneously, will be crucial for avoiding data 
      races and deadlocks in modern software code.
      </p>
    `,
    backLabel: "Wait, I didn't want to study this",
    backHref: "index.html",
  },
  {
    wrapperClass: "real-world",
    title: "Real world applications:",
    content: `
      <p>When it comes to achieving performance, responsiveness, and security through concurrent 
      execution, processes and threads are responsible for this. They are crucial for responsive 
      user interfaces, scaling web servers, and implementing secure software! </p>
    `,
    backLabel: "Wait, I didn't want to study this",
    backHref: "index.html",
  },
  {
    wrapperClass: "os-page",
    title: "Operating system",
    content: `
      <p>Let's define some initial concepts:</p>
      <div class="inner-box">
        <h4>What is an operating system?</h4>
        <p>An OS is an interface between hardware and software.</p>
        <p>Think of an OS as a government, which is in charge of operating access to those resources. Overseeing fairness and safety.</p>
      </div>
      <div class="inner-box">
        <h4>Within the OS, there are some components:</h4>
        <ul>
            <li>The kernel: central core</li>
            <li>CPU: schedules and manages process management</li>
            <li>Memory: allocating storage</li>
            <li>I/O devices and disk</li>
            <li>GUI: Graphical User Interface </li>
        </ul>
      </div>
    `,
    backLabel: "Wait, I didn't want to study this",
    backHref: "index.html",
  },
  {
    wrapperClass: "threads-page",
    title: "Threads and Process",
    content: `
      <p>What's the difference between a thread and a process?</p>
      <div class="inner-box">
        <h4>What is a process?</h4>
        <p>A process is an independent running program. </p>
      </div>
        <div class="inner-box">
        <h4>What is a thread?</h4>
        <p>Threads exist within a process. They allow systems to have concurrency, 
        which means multiple things happening at once but NOT necessarily at the 
        same time.</p>
        <p>Important to know:</p>
        <ul>
            <li>Threads share their memory with other threads, which means they have their own stack and own registrar values</li>
        </ul>
        <p>There's 2 types of threads:</p>
        <ul>
            <li>Kernel threads: threads created and managed by the OS</li>
            <li>User threads: the OS does not manage or even know about these threads</li>
        </ul>
      </div>
    `,
    backLabel: "Wait, I didn't want to study this",
    backHref: "index.html",
  }
];