# DBE PYQ — Advanced OCR, Page-wise Transcription
**Source:** `DBE Pyq_compressed.pdf` · **PDF pages:** 15  
**Method:** Page-by-page OCR of readable text, questions, CO/marks/BL tables, schemas, relations and diagrams converted to text. Printed page numbers may restart. `[unclear]` marks text that is too faint, cropped, rotated or overlapped to transcribe reliably. No answers are solved or inferred.

---

# PDF PAGE 1 OF 15
## C. V. Raman Global University, Odisha — R25
Registration No.: [blank boxes] · Total printed pages: 4  
B.Tech, **CS242** · **Third Semester Regular Examination – 2025**  
**Database Engineering** · Branch: CSE & Allied Branches  
Time: 3 Hours · Full Marks: 100 · Answer all questions from Part A and Part B.

### Q1. Part-A (Answer all questions)

| Q | Question | CO | Marks | BL |
|---|---|---:|---:|---:|
| (a) | Explain exhaustive relationship in an ER model with an example. | 1 | 2 | 2 |
| (b) | Differentiate between strong entity sets and weak entity sets in a database. Explain their characteristics, key dependencies, and provide suitable examples to illustrate the distinction. | 1 | 2 | 2 |
| (c) | Highlight the important tasks handled by a Database Administrator (DBA) in a Database Management System. | 1 | 2 | 1 |
| (d) | Explain the key terminologies of the Relational Model—Relation, Tuple, Domain, and Cardinality—and describe how each contributes to the structure of a relational database. | 2 | 2 | 1 |
| (e) | List any two Relational Model Constraints and describe their significance by giving suitable examples. | 2 | 2 | 2 |
| (f) | State the difference between same value, multivalued, stored vs derived attribute with suitable examples. | 2 | 2 | 2 |
| (g) | Outline the Selection and Projection operations used in relational algebra with syntax. | 3 | 2 | 2 |
| (h) | Given schema Student(sid, sname, branch, address), write the SQL query to retrieve names of students whose name is 7 characters long and starts with ‘M’. | 3 | 2 | 2 |
| (i) | Compare and contrast the RENAME operator and the SORT command of SQL with example. | 3 | 2 | 2 |
| (j) | Consider relation \(R(STUWW)\) with functional dependencies \(F=\{ST\to UW,\ V\to W\}\). Determine the minimum cover and candidate key. | 4 | 2 | 3 |
| (k) | Explain the difference between Partial Dependency and Transitive Dependency in relational database design. | 4 | 2 | 2 |
| (l) | Explain Armstrong’s Axioms and their role in inferring functional dependencies within a relational schema. | 4 | 2 | 2 |
| (m) | Compare conflict serializability and view serializability with suitable examples. | 5 | 2 | 2 |

*Q1(j) symbols are faint; relation/dependency notation above is best-effort.*

---

# PDF PAGE 2 OF 15
Continuation of Third Semester Regular Examination 2025.

### Q1 Part-A continuation

| Q | Question | CO | Marks | BL |
|---|---|---:|---:|---:|
| (n) | Compare conflict operations (read-write, write-read, write-write conflicts) with examples. | 5 | 2 | 2 |
| (o) | Illustrate and describe the various types of database failures that may affect transaction processing. | 5 | 2 | 2 |

## Part-B — Q2. Answer any two
**(a)** Explain the disadvantages of the traditional file processing system and the need for a Database Management System (DBMS). CO1; 7 marks; BL2.  
**(b)** Explain the major components of the ER model: entities, attributes, relationships and keys. Explain different relationship types with examples. CO1; 7 marks; BL2.  
**(c)** Illustrate the three-schema levels of database architecture with a diagram. Explain how data abstraction enhances database efficiency and user interaction. CO1; 7 marks; BL3.

## Q3. Answer any two
**(a)** Explain Generalization and Specialization in the Enhanced ER (EER) Model and how they represent hierarchical relationships, with examples/diagrams. CO2; 7 marks; BL2.  
**(b)** Design an ER diagram for a university database with students, courses and instructors: each student can enroll in multiple courses; each course can be taught by one instructor. Include attributes, relationships and key constraints. Map the ER diagram to relational tables and specify keys/constraints. CO2; 7 marks; BL3.  
**(c)** Discuss Super Key, Candidate Key, Primary Key, Alternate Key and Foreign Key with examples and their role in data integrity. CO2; 7 marks; BL2.

## Q4(a)
Explain Inner Join in relational algebra. Differentiate natural join, theta join and equi-join, with examples and relational schemas. CO3; 7 marks; BL2.

---

# PDF PAGE 3 OF 15
## Q4(b) — Table: `University_Faculty_Details`

| ID | name | salary | dept_name | building | budget |
|---:|---|---:|---|---|---:|
| 22222 | Einstein | 95000 | Physics | Watson | 70000 |
| 12121 | Wu | 90000 | Finance | Painter | 120000 |
| 32343 | El Said | 60000 | History | Taylor | 100000 |
| 45346 | Katz | 75000 | Comp. Sci. | Taylor | 100000 |
| 98345 | Kim | 80000 | Elec. Eng. | Taylor | 85000 |
| 76766 | Crick | 72000 | Biology | Watson | 90000 |
| 10101 | Srinivasan | 65000 | Comp. Sci. | Taylor | 100000 |
| 58883 | Calvineri | 52000 | History | Painter | 50000 |
| 85821 | Brandt | 92000 | Comp. Sci. | Taylor | 100000 |
| 13151 | Mozart | 40000 | Music | Packard | 80000 |
| 35456 | Gold | 87000 | Physics | Watson | 70000 |
| 76543 | Singh | 80000 | Finance | Painter | 120000 |

*Names/values follow the best readable scan.*

Tasks:
1. Find name, department and salary for faculty with salary between ₹70,000 and ₹90,000.
2. List name, department and salary of faculty whose name starts with `S`.
3. List all faculty names in ascending order of salary.
4. Update all faculty salaries by 10%.
5. Display `ProductName` and `Price`, sorted by `ProductName` ascending.
6. Add a `phone_number` column to the above table.
7. Insert three new records into the above table.
CO3; 7 marks; BL2.

## Q4(c) — Relational Algebra schemas
- `product(product_id, product_name, manufacturer_name, product_rate, sell_price, product_description, client_id)`
- `client(client_id, client_name, address, city, pin, state, bal_due)`
- `salesman(salesman_id, salesman_name, address, city, pin, state, salary, product_id)`

i. Find names of salesmen and clients from the same city.  
ii. Find salesman name, address and phone for salesmen who sell products with selling price greater than ₹10,000.  
iii. Find names of salesmen who sell products manufactured by “Samsung”.  
iv. Find client details for clients living in Odisha with balance due over 20,000.  
v. Find client_id and names who sell washing machines.  
CO3; 7 marks; BL3.

---

# PDF PAGE 4 OF 15
## Q5
**(a)** Describe conditions under which two sets of functional dependencies are equivalent. For \(R(WXYZ)\), compare:
- \(FD_1=\{W\to X,\ X\to Y,\ YW\to Z\}\)
- \(FD_2=\{W\to X,\ X\to Y,\ W\to Z\}\)
Determine whether they are equivalent. CO4; 7 marks; BL3.

**(b)** Explain normalization and normal forms up to 3NF; explain lossless join decomposition. Given:
\[
R=(SSN, ENAME, PNUMBER, PNAME, PLOCATION, HOURS, CITY, STATUS)
\]
FDs:
\[
SSN\to(ENAME,CITY),\quad PNUMBER\to(PNAME,PLOCATION),
\]
\[
\{SSN,PNUMBER\}\to HOURS,\quad CITY\to STATUS
\]
Verify BCNF; if not, decompose to BCNF. CO4; 7 marks; BL4.

## Q6
**(a)** Explain transactions in DBMS and ACID properties, and their importance for consistency/reliability, with an example. CO5; 7 marks; BL2.  
**(b)** Check conflict serializability:
- \(S1: r_1(x); r_3(x); w_3(x); w_1(x); r_2(x)\)
- \(S2: r_3(x); r_2(x); r_1(x); w_3(x); w_1(x)\)
- \(S3: r_1(x); w_2(x); r_3(x); w_1(x); r_2(x); w_3(x)\)
CO5; 7 marks; BL3.
**Closing:** Best of Luck. Printed page 4.

---

# PDF PAGE 5 OF 15
## C. V. Raman Global University, Odisha — R26
Total printed pages: 3 · B.Tech Subject Code **CY201**  
**Fourth Semester Regular Examination – 2026** · **Green Chemistry**  
Branch: CE, CH, AIML, ICS, CSIT, ME, MR · 3 hours · Full Marks 100.

> This page is a Green Chemistry paper, not DBE, but is retained because it is in the uploaded PDF.

### Q1 Part-A (Answer all)

| Q | Question | CO | Marks | BL |
|---|---|---:|---:|---:|
| (a) | What is osmosis? | CO2 | 2 | 2 |
| (b) | Define oxidation and reduction. | CO3 | 1+1 | 1,2 |
| (c) | What is pitting corrosion? | CO5 | 2 | 2 |
| (d) | If 20 g KCl is present in 100 mL water, calculate concentration in ppm. | CO2 | 2 | 2 |
| (e) | Write two examples of renewable energy source. | CO1 | 1+1 | 2 |
| (f) | While iron exposed to oxygen and moisture corrodes, gold remains unaffected. Explain. | CO5 | 2 | 1,2 |
| (g) | Name the industrial process to synthesize ammonia from nitrogen and hydrogen. | CO1 | 2 | 2 |
| (h) | What is desalination? | CO2 | 2 | 2,3 |
| (i) | What electrolyte is used in a proton exchange membrane fuel cell? | CO4 | 2 | 2 |
| (j) | Write the electrolyte of a Direct Methanol Fuel Cell. | CO4 | 2 | 1 |
| (k) | Differentiate alkaline battery and acid battery, with examples. | CO3 | 2 | 1,3 |
| (l) | Name the indicator used in EDTA titration to estimate water hardness. | CO2 | 2 | 2 |

---

# PDF PAGE 6 OF 15
Continuation of Green Chemistry, CY201, 2026.

**Q1(m)** Write two examples of bio-fuel. CO1; 1+1 marks; BL2.  
**Q1(n)** Which salt regenerates an exhausted zeolite bed? (i) CaSO₄ (ii) NaCl (iii) K₂SO₄ (iv) MgCl₂. CO2; 2 marks; BL2,3.  
**Q1(o)** Write two examples of Green Solvents. CO1; 2 marks; BL2,3.

## Part-B
### Q2. Answer any two
**(a)** What is Biocatalysis? Mention the 12 principles of green chemistry. CO1; 1+6 marks; BL2.  
**(b)** Calculate percentage atom economy and E-factor:
Reaction 1: \(Fe_2O_3+3CO\to2Fe+3CO_2\). Mass annotations visible: 159, 28, 56, 44 (placement is small in scan).  
Reaction 2: \(C_2H_4+H_2O\to C_2H_6O\). CO1; 3.5+3.5 marks; BL3.  
**(c)** Explain reverse osmosis with a diagram. CO2; 7 marks; BL4.

### Q3. Answer any two
**(a)** Illustrate softening of hard water by ion-exchange method. CO2; 5+2 marks; BL3,4.  
**(b)** How much CaSO₄ is needed in 1 litre distilled water to have hardness 100 ppm? Molecular weight CaSO₄ = 136. CO2; 7 marks; BL3.  
**(c)** EDTA in hard water gives wine-red colour and changes to stable blue after EDTA addition. Explain colour change and chemical process. CO2; 7 marks; BL4.

### Q4. Answer any two
**(a)** Explain chemical reactions and origin of electron flow in a Daniell cell with Zn anode and Cu cathode. CO3; 7 marks; BL3,4.  
**(b)** Write cathode, anode and electrolyte of Li-ion battery. Describe charging/discharging through Li-ion intercalation. CO3; 5+2 marks; BL3,4.

---

# PDF PAGE 7 OF 15
Continuation of Green Chemistry.

**Q4(c)** What is memory effect? Write cathode and anode reactions of Ni-Cd battery. CO3; 2+5 marks; BL2,4.

## Q5
**(a)** What is the electrolyte of an alkaline fuel cell? Write anode, cathode and overall reactions. CO4; 2+5 marks; BL4.  
**(b)** Determine Pilling–Bedworth ratio for MgO formation over Mg. Given: M.W.(MgO)=41.31 g/mol; density MgO=3.58 g/cm³; atomic weight Mg=24.3; density Mg=1.74 g/cm³. Comment whether MgO is protective. CO5; 5+2 marks; BL2,4.

## Q6
**(a)** Explain corrosion control by cathodic protection. CO5; 3.5+3.5 marks; BL2,4.  
**(b)** For copper coating on an iron rod, state anode, cathode and electrolyte; explain the chemical coating process. CO5; 3+4 marks; BL2,4.

**Closing:** Best of Luck. Printed page 3.

---

# PDF PAGE 8 OF 15
## C. V. Raman Global University — B26
Total printed pages: 4 · B.Tech Subject Code **CSE23306**  
**Fourth Semester Backlog Examination – 2026** · **Database Engineering**  
Branch: CSE-IOTCS [as visible] · 3 hours · Full Marks 100.

## Q1 Part-A (Answer all)

| Q | Question | CO | Marks | BL |
|---|---|---:|---:|---:|
| (a) | Discuss primary key and foreign key of a relation with example. | 1 | 2 | 2 |
| (b) | Write the role of database administrator. | 1 | 2 | 2 |
| (c) | Define data independence in a database. | 1 | 2 | 2 |
| (d) | Describe composite attributes. | 1 | 2 | 2 |
| (e) | Compare strong entity with weak entity set, with example. | 1 | 2 | 2 |
| (f) | List different types of degrees of relationships. | 1 | 2 | 2 |
| (g) | Define inner join and outer join. | 3 | 2 | 2 |
| (h) | Explain division operation with example. | 3 | 2 | 2 |
| (i) | Difference between DROP and TRUNCATE in SQL. | 3 | 2 | 3 |
| (j) | \(R(A,B,C,D,E)\), FDs \(\{A\to BC,\ CD\to E\}\), decomposed into \(R_1(A,B,C)\) and \(R_2(C,D,E)\). Is decomposition lossless? Explain. | 4 | 2 | 3 |
| (k) | Discuss different types of functional dependencies in a relational schema with examples. | 4 | 2 | 2 |
| (l) | For \(R(A,B,C,D,E)\), FDs \(\{A\to B,\ BC\to D,\ D\to E\}\), compute closures of A and BC and list two attribute closures. | 4 | 2 | 3 |
| (m) | Differentiate conflict and view serializability. | 5 | 2 | 2 |
| (n) | Distinguish serial and non-serial schedules. | 5 | 2 | 2 |
| (o) | Explain requirements of recovery in a database environment. | 5 | 2 | 2 |

---

# PDF PAGE 9 OF 15
Continuation of CSE23306 Backlog Examination 2026.

## Q2. Answer any two
**(a)** Compare Relational and Hierarchical models with examples. CO1; 7 marks.  
**(b)** (i) Illustrate advantages of DBMS over file-management system. (ii) Justify why data independence is necessary in DBMS. CO1; 7 marks.  
**(c)** Briefly explain data atomicity and isolation with data inconsistency in DBMS, with examples. CO1; 7 marks.

## Q3. Answer any two
**(a)** Illustrate different types of keys with examples. CO2; 7 marks.  
**(b)** Describe cardinality ratios and participation constraints with an ER diagram. CO2; 7 marks.  
**(c)** Map the following ER model to relational model. Diagram labels:
- `Account` attributes `Ac_no`, `Balance`.
- `Branch` attributes `b_name`, `b_city`, `Assets`.
- Relationship `Account branch` between Account and Branch.
- `Customer` attributes `C_name`, `C_street`, `C_city`.
- Relationship `Depositor` between Customer and Account.
- `Loan` attributes `L_no`, `Amt`.
- Relationship `Loan branch` between Branch and Loan.
- Relationship `Borrower` between Customer and Loan.
CO2; 7 marks.

## Q4(a)
“Consider the following relations:” — relation tables and the remainder of the question continue on PDF page 10.

---

# PDF PAGE 10 OF 15
Continuation of CSE23306 Backlog Examination 2026.

## Q4(a) — Relations P, Q, R

**Relation P**

| X | Y | Z |
|---|---|---|
| X1 | Y1 | Z1 |
| X1 | Y1 | Z2 |
| X2 | Y2 | Z2 |
| X2 | Y4 | Z4 |

**Relation Q**

| X | Y | T |
|---|---|---:|
| X2 | Y1 | 2 |
| X1 | Y2 | 5 |
| X1 | Y1 | 6 |
| X3 | Y1 | 1 |

**Relation R**

| Y | V |
|---|---|
| Y1 | V1 |
| Y3 | V2 |
| Y2 | V3 |
| Y2 | V2 |

*Tuples are transcribed from a small, faint image; verify before using in calculations.*

Tasks: retrieve tuples returned by:
1. \(\sigma_{P.Y=Q.Y\land Q.X=P.X}(P\bowtie Q)\), where \(\bowtie\) is natural join.
2. \(\sigma_{R.Y=Q.Y}(R\bowtie Q)\), where \(\bowtie\) is natural join.
3. Perform left outer join between Q and R.
CO3; 7 marks; BL3.

## Q4(b)
State and explain DDL, DML and DQL commands with suitable examples and syntax. CO3; 7 marks; BL4.

## Q4(c)
Relations: `Employee(eid, ename, salary, dept_id)` and `Department(dept_id, dept_name, location)`.
i. Identify primary and foreign keys.  
ii. Find employees with salary greater than 40000.  
iii. Find employees working in HR department.  
iv. Find departments located in Delhi.  
CO3; 7 marks; BL3.

## Q5
**(a)** For \(R(A,B,C,D,E,F)\), compare:
- \(F_1=\{A\to BC,\ B\to DE,\ E\to AB\}\)
- \(F_2=\{A\to BCF,\ B\to DE,\ E\to AB\}\)
Check whether the sets are equivalent. CO4; 7 marks; BL3.  
**(b)** Explain the need for normalization and normal forms up to BCNF, with examples. CO4; 7 marks; BL3.

## Q6
Describe transaction and explain transaction states with a state diagram. CO5; 7 marks; BL2. Printed page number 3.

---

# PDF PAGE 11 OF 15
Continuation of CSE23306 Backlog Examination 2026; page is rotated.

## Q6(b) — Conflict serializability
**Question:** Define conflict serializability. Is the given schedule conflict serializable? Check using a precedence graph.

Best-effort reading of schedule:
- **S1:** \(r_1(x); r_1(y); w_1(x); w_2(x); r_2(y)\)
- **S2:** \(r_2(x); r_1(y); w_1(x); w_2(y)\)

*Transaction subscripts/order are small and rotated; verify against the original image before solving.*

## Course Outcome Assessment Scheme (rotated table; readable portion)

| CO | Description | Questions | Total Marks |
|---|---|---|---:|
| CO1 | Differentiate database concepts from conventional file storage and describe DBMS architecture, relational, hierarchical and network database models. | (1a), (1b), (1c), (1d), (2a), (2b), (2c) | 20 |
| CO2 | Analyze applications using E-R modeling and describe logical and physical database design. | (1e), (1f), (3a), (3b), (3c) | 20 |

*Remaining rows are not fully visible/readable.*

---

# PDF PAGE 12 OF 15
Sideways/rotated continuation page.

**(b)** Define conflict serializability. Is the given schedule conflict serializable? Use a precedence graph.

The visible schedule appears to contain:
- \(S1:\ r_1(x); r_1(y); w_2(x); w_1(x); r_2(y)\)
- \(S2:\ r_2(x); r_1(y); w_1(x); w_2(y)\)

*Exact transaction subscripts/order are uncertain because of rotation and small text.*

**Closing:** Best of Luck.

## Course Outcome Assessment Scheme — visible portion

| CO | Description | Questions | Total Marks |
|---|---|---|---:|
| CO1 | Differentiate database concepts from conventional file storage and describe DBMS architecture, relational, hierarchical and network database models. | (1a), (1b), (1c), (1d), (2a), (2b), (2c) | 20 |
| CO2 | Analyze applications using E-R modeling and describe logical and physical database design. | (1e), (1f), (3a), (3b), (3c) | 20 |

*Remainder of table is cropped or unreadable.*

---

# PDF PAGE 13 OF 15
## C. V. Raman Global University — R24
Registration No.: appears to read `230102022` [uncertain] · Total printed pages: 05  
B.Tech **CS242** · **Fourth Semester Regular Examination – 2025**  
**Database Engineering** · CSE & Allied Branches · 3 hours · Full Marks 100.

## Q1 Part-A (Answer all)

| Q | Question | CO | Marks | BL |
|---|---|---:|---:|---:|
| (a) | Explain the purpose and role of a data dictionary in a database system. | 1 | 2 | 1 |
| (b) | Explain the meaning of a composite attribute in an ER model with an example. | 1 | 2 | 1 |
| (c) | Give an example of a one-to-many relationship. | 1 | 2 | 1 |
| (d) | Compare and contrast Generalization, Specialization and Aggregation. | 1 | 2 | 2 |
| (e) | Illustrate ER and EER models in the context of database. | 2 | 2 | 2 |
| (f) | Explain degree of a relationship in an ER model with an example. | 2 | 2 | 2 |
| (g) | Analyze how relational algebra differs from SQL in expressiveness and execution. | 3 | 2 | 2 |
| (h) | Explain the difference between JOIN and Cartesian product in relational algebra. | 3 | 2 | 2 |
| (i) | Explain union compatibility in relational algebra operations. | 3 | 2 | 2 |
| (j) | Identify anomalies that occur in an un-normalized relation. | 4 | 2 | 2 |
| (k) | Explain minimizing the left-hand side of a functional dependency. | 4 | 2 | 2 |

---

# PDF PAGE 14 OF 15
Continuation of CS242, Fourth Semester Regular Examination 2025.

## Q1 Part-A continuation

| Q | Question | CO | Marks | BL |
|---|---|---:|---:|---:|
| (l) | Identify and eliminate redundant functional dependencies from \(F=\{A\to B,\ B\to C,\ A\to C\}\). | 4 | 2 | 3 |
| (m) | Explain view serializability with a suitable example. | 5 | 2 | 2 |
| (n) | Analyze \(S1:R1(A), R2(B), W1(B), W2(A)\) and determine conflict serializability by constructing a precedence graph. | 5 | 2 | 3 |
| (o) | List types of failures that can occur in a database system. | 5 | 2 | 2 |

## Part-B — Q2. Answer any two
**(a)** Draw and explain the three-schema architecture in database design. State the importance of data abstraction in DBMS. CO1; 7 marks; BL2.  
**(b)** Explain the file-processing system and its limitations. How does DBMS address these issues? CO1; 7 marks; BL2.  
**(c)** Explain weak entity sets in the ER model: (i) difference from strong entity; (ii) identifying relationship and partial key; (iii) example such as Student–Dependent or Building–Apartment. CO1; 7 marks; BL3.

## Q3. Answer any two
**(a)** Classify database keys and explain how each contributes to data integrity. CO2; 7 marks; BL2.  
**(b)** Design relational tables from a given ER diagram involving Specialization. CO2; 7 marks; BL3.  
**(c)** Convert Figure-1 ER diagram into relational tables, stating primary and foreign keys.

---

# PDF PAGE 15 OF 15
## Figure-1 ER diagram — text reconstruction
- Entity **Account** with attributes `Ac_no`, `Balance`.
- Entity **Branch** with attributes `b_name`, `b_city`, `Assets`.
- Relationship **Account branch** between Account and Branch.
- Entity **Customer** with attributes `C_name`, `C_street`, `C_city`.
- Relationship **Depositor** between Customer and Account.
- Entity **Loan** with attributes `L_no`, `Amt`.
- Relationship **Loan branch** between Branch and Loan.
- Relationship **Borrower** between Customer and Loan.

**Q3(c) scenario:** A company is organized into Departments. Each department has a name, number, and an employee who manages it; manager start date is stored. Departments may have several locations and control projects. Each project has unique name/number and one location. Each employee has name, SSN, address, salary, sex and birthdate. Each employee works for one department and may work on several projects; hours per week per project are recorded. Employees may have dependents; each dependent has name, sex, birthdate and relationship. Draw an ER diagram. CO2; 7 marks; BL4.

## Q4. Answer any two
**(a)** Define join in relational algebra. Compare natural join, theta join and equi-join with examples. CO3; 7 marks; BL2.

**(b) SQL queries using tables**

**Department**

| DeptID | DeptName |
|---:|---|
| 10 | HR |
| 20 | IT |
| 30 | Finance |

**Employee**

| EmpID | Name | Age | Salary | DeptID |
|---:|---|---:|---:|---:|
| 1 | John | 28 | 50000 | 10 |
| 2 | Maria | 32 | 62000 | 20 |
| 3 | Ahmed | 24 | 45000 | 10 |
| 4 | Priya | 29 | 67000 | 30 |

Tasks:
i. Create both tables with suitable data types/constraints and insert sample data.  
ii. Display names and salaries of employees in IT.  
iii. Increase every employee salary by 10%.  
iv. Delete employees whose salary is less than ₹50,000.  
v. Display average employee salary.  
vi. Display employees whose name starts with `M`.  
vii. List employees ordered by salary from highest to lowest. CO3; 7 marks.

**(c) Relational algebra schema**
- `passenger(pid, pname, pgender, pcity)`
- `agency(aid, aname, acity)`
- `flight(fid, fname, fdate, ftime, source, destination)`
- `booking(pid, aid, fid, fdate)`

Queries:
i. Get flight IDs travelling to New Delhi.  
ii. Get flight IDs and names for flights from Chennai to New Delhi.  
iii. Get agency IDs that booked flight `UA2321`.  
iv. Find passenger names with bookings on flight `UA2321`.  
v. Find passenger names and cities for passengers who booked through `JET Agency`.

## Q5(a)
For \(R(A,B,C,D,E,F,G,H,I,J,K)\), with
\[
F=\{A\to BC,\ A\to DE,\ B\to F,\ F\to GH,\ D\to IJ,\ K\to B\},
\]
find all candidate keys, check whether R is in BCNF, and normalize to BCNF if needed. CO4; 7 marks; BL3.

**End of supplied PDF:** printed page number 4 is visible. Further questions are not present in the uploaded 15 pages.

---

# Page index and quality notes

| PDF page | Content |
|---:|---|
| 1–4 | DBE — Third Semester Regular Examination 2025 |
| 5–7 | Green Chemistry — Fourth Semester Regular Examination 2026 (included because present in source) |
| 8–12 | DBE — Fourth Semester Backlog Examination 2026 and rotated continuation |
| 13–15 | DBE — Fourth Semester Regular Examination 2025 |

- All 15 supplied PDF pages are represented in order.
- Tables and relation schemas have been recreated in Markdown.
- ER diagrams have been converted to entity/attribute/relationship descriptions.
- Pages 11–12 are rotated and partly unclear; schedules and CO tables are flagged as best-effort.
- No missing continuation pages have been invented; the file ends where the supplied PDF ends.
