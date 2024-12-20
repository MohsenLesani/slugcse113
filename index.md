# CSE 113: Parallel and Concurrent Programming
University of California, Santa Cruz, Fall 2024

**************************************************
### | [Overview](#overview)  |  [Schedule](#schedule)  | [Description](#description) | [Teaching Team](#teaching-team)  | [Assessment](#assessment) | 

<!-- 
Command:
pandoc --css=styling.css -s -f markdown+smart --metadata pagetitle="CSE 113: Parallel and Concurrent Programming" --to=html5 index.md -o index.html 
-->


![Slugs running in parallel! (This image was generated by OpenAI ChatGPT.)](images/running_slugs.jpg "Slugs running in parallel")

**************************************************
# Overview

## Welcome

CSE113: Parallel and Concurrent Programming  
UCSC CSE  
Fall 2024  

Instructor:  
    [Mohsen Lesani](https://mohsenlesani.github.io/) <<mlesani@ucsc.edu>>  
Time:  
    Tuesdays Thursdays 1:30pm - 3:05pm  
Location:  
    Steven Acad 150  
TAs:  
    Jessica Dagostini  <<jessica.dagostini@ucsc.edu>>  
    Gurpreet Dhillon <<gdhillo6@ucsc.edu>>  
Tutors:  
    Ananthajit Srikanth <<ants@ucsc.edu>>  
    Jacob Dickerman <<jwdicker@ucsc.edu>>  
    Ashley Lee <<allilee@ucsc.edu>>  

Hello and welcome to the parallel and concurrent programming class! In this class, you will learn the fundamentals of parallel programming concepts, including parallel programming models, reasoning about concurrency, and implementing synchronization idioms. Over the last decade, systems have become more and more parallel, from our phones to supercomputers. Now, nearly every modern device now contains many compute units (e.g., CPUs). These different compute units can work together to solve problems more efficiently than individual cores; however, they must be programmed carefully, both in terms of performance and safety. We will learn how to approach parallel programming, from high-level reasoning to concrete implementations.

This class is scheduled to be in person. We will follow the university guidelines and adapt if necessary. We will do our best to accommodate temporary remote attendance if needed (e.g., if you get sick); however, you are expected to make an effort to attend in-person classes. If your situation requires asynchronous courses, we suggest you contact an undergraduate adviser to discuss alternative options.

## Websites and Forums

- Github.io  
<https://mohsenlesani.github.io/slugcse113/>  
_Non-protected materials_ will be hosted on this website. This includes the schedule, lecture slides, and references, etc.

- Canvas  
<https://canvas.ucsc.edu/courses/75704>  
_Protected materials_ will be hosted on a Canvas website that you will need your university credentials to access. These materials include homeworks, zoom links, lecture recordings, tests, grades, etc.

- Piazza  
<https://piazza.com/class/m1l3ef1im6q1so>  
_A Class forum_ will be provided in Piazza. If you organize other forums outside of the class Piazza (e.g. discord), you must adhere to academic integrity and be kind and respectful. 

## Acknowledgements

The material for this course is adopted from Professor [Tyler Sorensen](https://users.soe.ucsc.edu/~tsorensen/).

**************************************************
# Schedule

The schedule may adapt to our pace. The slides for each lecture are uploaded before the lecture.

The example code snippets from the lectures are available at this [Code Repo](https://github.com/MohsenLesani/CSE113_Lecture_Code).

## Module 1: Introduction, Background and ILP

| Date       | Topic                             | Slides |   Readings       | Event
| --------------- | ------------------------------- | -------- | -------------------- | --------------------
| Sep 26 | Welcome!                               | [slides](lectures/1.M1.1.pdf)     | |
| Oct 1 | Instruction Level Parallelism | [slides](lectures/2.M1.2.pdf)    | Appendix B & Class slides | 
| Oct 3    | C++ threads and caches        | [slides](lectures/3.M1.3.pdf)     | Class Slides | HW#1 Release

## Module 2: Mutual Exclusion

| Date       | Topic                             | Slides |   Readings       | Event
| ---------------- | ------------------------------- | -------- | -------------------- | --------------------
| Oct 8     | Principles of Mutual Exclusion  |  [slides](lectures/4.M2.1.pdf)  | Chapter 2 |
| Oct 10 | Mutual Exclusion in Practice      |  [slides](lectures/5.M2.2.pdf) | Chapter 2 |  HW#2 Release
| Oct 15 | Specialized Mutual Exclusion    |  [slides](lectures/6.M2.3.pdf) | Chapter 7.5 - end | HW#1 Deadline
| Oct 17 | Mutex Wrapup                             |  [slides](lectures/7.M2.4.pdf) | Chapter 8 |

## Module 3: Concurrent Data Structures

| Date       | Topic                             | Slides |   Readings       | Event
| ----------- | ------------------------------- | -------- | -------------------- | --------------------
| Oct 22 |                                           |           |                           | Midterm
| Oct 24 | Principles of Concurrent Objects     | [slides](lectures/8.M3.1.pdf)  | Chapter 3 | HW#2 Deadline, HW#3 Release
| Oct 29 | Specialized Concurrent Queues           |  [slides](lectures/9.M3.2.pdf) | Class slides |
| Oct 31 | Midterm Review / Guest Lectures  |           |                           | 
| Nov 3 | Work Stealing                                           | [slides](lectures/10.M3.3.pdf)| Chapter 10 + class slides |

## Module 4: GPU Computing

| Date       | Topic                             | Slides |   Readings       | Event
| ------------ | ------------------------------- | -------- | -------------------- | --------------------
| Nov 7  | Intro to GPUs and GPU programming  | [slides](lectures/11.M4.1.pdf) | CUDA By Example Chapter 1 | HW#3 Deadline, HW#4 Release
| Nov 12 | Javascript Parallelism                          |  [slides](lectures/12.M4.2.pdf) | Class Slides |
| Nov 14 | Web GPU programming, (start memory models?)                       | [slides](lectures/13.M4.3.pdf)| Class Slides |

## Module 5: Advanced topics

| Date | Topic                             | Slides |   Readings       | Event
| ------------  | ------------------------------- | -------- | -------------------- | ----------
| Nov 19 |  Memory Consistency Models    |  [slides](lectures/14.M5.1.pdf)  | [You Don’t Know Jack ...](https://queue.acm.org/detail.cfm?id=2088916) | HW#4 Deadline
| Nov 21 |  General concurrent sets | [slides](lectures/15.M5.2.pdf)  | Chapter 9 + Class Slides | HW#5 Release
| Nov 26 |  General concurrent sets / Barriers                              | [slides](lectures/16.M5.3.pdf)  | Chapter 17 |
| Nov 28 |                                               |           |                           | Holiday
| Dec 3 |  Barriers / Processes             | [slides](lectures/17.M5.4.pdf)  | Class Slides | 
| Dec 5 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  |  Practice session / Research lecture   | [slides](lectures/18.M5.5.pdf)  [Qs](lectures/Qs.md) | Class Slides | HW#5 Deadline
| Dec 12, 12-3pm, lecture class |                                           |           |                           | Final exam


**************************************************
# Description

## Summary

Welcome to CSE 113: Parallel and Concurrent Programming! In this class, we will explore many aspects of parallel computing, from instruction-level parallelism in seemingly sequential programs to thread-level parallel programs that can efficiently execute across the many cores of today's multiprocessors and accelerators (e.g., GPUs). We will learn how to write programs that execute efficiently and correctly in concurrent environments. This class will give you the necessary foundation to solve problems in parallel: a powerful skillset considering that today's computers are increasingly parallel.

## Modules

This class will be split into 5 modules, each of which are roughly two weeks:

* **Module 1: Introduction, Background and ILP**  
This module will introduce the course and provide a programming, compiler, and architectural refresher. We will discuss how modern hardware exploits parallelism within a sequential thread, known as instruction-level parallelism (ILP), and how to write parallel code in C++.

* **Module 2: Mutual Exclusion**  
This module will discuss the fundamental problem of mutual exclusion. We will discuss the theory behind mutual exclusion, how it is implemented in practice, and further, specialized mutual exclusion implementations. 

* **Module 3: Concurrent Data Structures**  
This module will discuss concurrent objects, and how to reason about them. We will discuss several implementations, and show how they can be used in load balancing and software pipelining.

* **Module 4: Parallel Programming on GPGPUs**  
This module will discuss general purpose (GP) GPU programming. We will discuss the single-instruction multiple-threads (SIMT) programming model, hierarchical execution, and different architectural considerations when optimizing programs.

* **Module 5: Advanced topics**  
This module will discuss advanced topics, including memory consistency and fairness.

## References

We cover the required material in the class and provide the slides. We do not require a physical textbook for this class; however, we list the following that we will use. Each are available online from the UCSC library.

* [The Art of Multiprocessor Programming](https://ucsc.primo.exlibrisgroup.com/permalink/01CDL_SCR_INST/h824t0/WorldCat1376835717).  
This book has a nice collection of concurrent data structures.
* [Computer Architecture: A Quantitative Approach](https://ucsc.primo.exlibrisgroup.com/permalink/01CDL_SCR_INST/15r5l0d/alma9914804950506531)  
For those of you who have not taken CSE 120, you may find this helpful. Chapter 2 deals with the memory hierarchy and Chapter 3 deals with hardware for instruction level parallelism.
* [CUDA by Example](https://edoras.sdsu.edu/~mthomas/docs/cuda/cuda_by_example.book.pdf)  
We recommend this book for more information on GPU computing.

## Required Background

The prerequisites for this class are CSE 12 (systems), CSE 101 (data-structures and algorithms), and recommended CSE 120 (architecture). You will need some foundation in all of those topics to succeed in this class. For example: you will need to know data-structures and algorithms, as we will extend some of these sequential concepts to their natural parallel counterparts. You will need some systems background, as we will discussing many aspects of the hardware/software interface. Parallel programming is most efficiently executed on parallel hardware; thus, it is helpful to understand shared hardware resources (e.g. the memory hierarchy) of the underlying architectures. 

Because this is an upper division class, we expect a general CS foundation. For the homeworks, I will assume that you are:

- comfortable using a linux command-line
- programming in a high-level language (e.g. Python)
- programming in a low-level language (e.g. C)
- a high-level understanding of computer architecture
- a basic ability to use Github
- a basic ability to use Docker
 
## Attendance/Quiz

Live discussions and synchronous class attendance are a valuable part of the learning experience. I expect you to make an effort to synchronously attend this class, whether on Zoom on in-person. I plan to upload recordings of the class to canvas, but this is not a substitute for attendance. 

Attendance will be graded using a small quiz given at the end of the class. Please do not submit the quiz unless you either attended or watched the lecture.

_If synchronous attendance drops significantly then I will stop recording lectures and make attendance a part of the grade._

## Accessibility

UC Santa Cruz is committed to creating an academic environment that supports its diverse student body. If you are a student with a disability who requires accommodations to achieve equal access in this course, please submit your Accommodation Authorization Letter from the Disability Resource Center (DRC) to me by email, preferably within the first two weeks of the quarter. I would also like us to discuss ways we can ensure your full participation in the course. I encourage all students who may benefit from learning more about DRC services to contact DRC by phone at 831-459-2089 or by email at drc@ucsc.edu.

## Privacy

I plan to record lectures in class. Please be aware that:

- Things you say or do will be recorded. I doubt that this will be an issue, but if you want me to remove any part of the recording, please just let me know.
- Many forums (e.g. zoom chats, Piazza posts, etc.) chats are not private. Please be respectful and kind, and assume everyone can see what you are typing.

**************************************************
# Teaching Team

We have a great teaching staff this quarter! All of them are passionate about parallel programming. Please get to know them and take advantage of the office hours and mentoring sessions they provide.

## Office Hours:

### TA

    Jessica Dagostini  
    <<jessica.dagostini@ucsc.edu>>  
    Tuesdays: 10:00am - 11:00am remotely  
    Thursdays: 11:00am - 12:00pm @ BE-153A, hybrid  
    [https://calendar.app.google/D8uMjPANd5NS9kUd7](https://calendar.app.google/D8uMjPANd5NS9kUd7)  
    The opening slots will be visible just one day before the day of the OH.  
    Each slot has 15 min each.

### TA

    Gurpreet Dhillon  
    <<gdhillo6@ucsc.edu>>  
    Wednesdays: 12:00pm - 1:00pm remotely  
    Fridays: 12:30pm - 1:30pm @ BE-312B, in-person  
    [Google Doc](https://docs.google.com/spreadsheets/d/1D_Z7ABTYHt5sTkUaRpSM7-748l-P8LA-hbYdGugKk-I/edit?usp=sharing)  
    This spreadsheet is a sign-up sheet for Wednesday.

### Tutor 

    Ananthajit Srikanth
    <<asrikan1@ucsc.edu>>  
    Mondays/Wednesdays: 5:30pm - 6:30pm @ Jack's lounge, in-person    

### Tutor 

    Jacob Dickerman
    <<jwdicker@ucsc.edu>>  
    Mondays: 1:30pm - 2:30pm @ S&E library, hybrid  
    Wednesdays: 10:00am - 11:00am remotely 

### Tutor

    Ashley Lee
    <<allilee@ucsc.edu>>  
    Mondays: 11:00am - 12:30pm @ Jack's Lounge, in-person  
    Tuesdays: 12:00pm - 1:30pm remotely


### Instructor

    [Mohsen Lesani](https://mohsenlesani.github.io/)  
    <<mlesani@ucsc.edu>>  
    Thursdays 3:10pm - 5:10pm. Office: E2 331  
    My office hours can be remote or in-person.  
    My physical office is E2-331.  
    I announced a Zoom link and its passcode on canvas.

## Asynchronous Communication

For any questions outside of office hours: Please post to the class Piazza. 

Link for Piazza is <https://piazza.com/class/m1l3ef1im6q1so>.  

If your question is more general, make it visible to the rest of class. If it isn't clear if it is a sensitive question or not, please start out by making the question to the teaching staff and we can advise on making it public or not. Feel free to answer questions that your classmates post or freely participate in discussions there. 
                                                                                             
If it is a sensitive topic, you can post only to the teaching staff. Please do not message me directly unless it is an emergency. Please do not email us individually. Those emails get buried, or they might not be seen by the right member of the teaching staff. This especially applies to grading questions; if you have questions about your grade do *not* email a grader directly. Write a private post on Piazza to the teaching staff. Typically grades are a collaborative effort between several TAs, and it helps if we can all see the issue.

We will strive to reply to homework questions and discussions within 24 hours. Please do not plan on, or expect help, outside of regular business hours (after 5 pm, weekends, or holidays)

**************************************************
# Assessment

## Grade Breakdown

- Attendance/Quiz: 10%
- Homeworks: 50% (10% each)
- Midterm Exam: 10%
- Final Exam: 30%

If you want to discuss a grade, please contact the teaching staff no later than 1 week after the grades are posted.

## Attendance/Quiz

A small quiz is given at the end of each class. Each quiz has a few multiple-choice or short-answer questions that are designed to make you think about what you have learned in the class, and the questions might be open-ended. Please do not submit the quiz unless you either attended or watched the lecture. You can have up to 3 absences that will not affect your grade. 

## Homework:

There will be one assignment per module, for a total of 5 homeworks.

We will use github classroom with automatic feedback for 4 of the assignments. Because this is a relatively new setup, there may be some friction getting started. We appreciate your patience and understanding. I will update the class as we make progress.

We will provide a docker for you to develop in. We plan to enable a git-based workflow where you push your current solution to a repo, and receive feedback from a server. You will be graded on the server feedback rather than the results from your own machine. This is to help provide a fair and scalable grading across the increasing diverse devices that everyone has these days. Someone with an Apple M-series processor will get very different results than someone with an Intel X86 processor. Architectural differences are very interesting to discuss and I hope we can have detailed discussions about how your machine's results differ from the server on Piazza.

Homeworks are due at midnight on their due date. (Please do not plan on help after 5 pm.) You will have 10 days for each assignment. You have an additional 3 days to turn homework in late _without penalty_. After that, late submission will not be accepted. The due date for the last homework may need to be adjusted to account for the end of the quarter.

## Exams:

There will be exams in this course: a midterm and a final. The midterm will be worth as much as a single homework assignment (10%). The final will be worth 30%.

The midterm will be given halfway through the class. The final will be given in the finals week. Dates will be announced in the schedule section.

You will be allowed 3 pages (front and back) of notes in any format (printed, hand-written, colored, etc). Feel free to print slides to use as your notes.

## Academic Integrity

One of the joys of university life is socializing and working with your classmates. We want you to make friends with each other and discuss the material. **That said, I expect all assignments (code, write-ups, and tests) to be your own original work.** If you work together with a classmate on an assignment, please mention this, e.g. in the comments of your code. If you use a figure you didn't create in a write-up, then it needs a citation. Please review the [universities policy on plagiarism](https://guides.library.ucsc.edu/citesources/plagiarism). This class has a zero-tolerance policy on cheating. Please don't do it. We would much rather get a hundred emails asking for help than have to refer anyone for academic misconduct.

As a final note on cheating: the economic condition facing computer science graduates is volatile in the near future. It is crucial that you benefit from your time at the university, and learn the concepts thoroughly. If you cheat, you will not be able to stand out from others who put in the effort when it comes time to find a job. Cheating will have a devastating impact on your own career opportunities. Just don't do it.

## Using AI Tools

We are in an exciting time for AI, especially for tools like Github co-pilot and LLMs (e.g., ChatGPT). These tools have incredible potential and they are improving every day. However, the educational community has not had sufficient time to understand their impact on learning objectives. This class has been designed to be taken *without* the use of AI tools. They are not allowed to be used in the course. If we suspect abuse, then we may implement random audits of assignments, where you will be asked to explain your implementation in detail.

If you are interested in seeing how these tools can help with parallel programming, please feel free to use them *after* you have submitted a non-AI version of the homework. We would be very interested in hearing about your experience, e.g., as a piazza post.

**************************************************

