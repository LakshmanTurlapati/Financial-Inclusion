
 **Financial Inclusion**

---

### Overview
This project is a **Proof of Concept (POC)** that aims to address the issue of financial exclusion, particularly for individuals who lack a traditional credit score. Many individuals, despite being financially responsible, are excluded from financial systems due to the unavailability of credit scores. This POC demonstrates a potential solution by calculating an alternative credit score using:

1. **Bank Transactions**  
2. **Utility Bill Payments**  
3. **Psychometric Test** (Pycometric Test - to assess behavioral attributes)

The project was built in **24 hours** during a hackathon and is in its **early stages**. It is **barely functional** and should not be considered a final product. Significant improvements and enhancements are required.

---

### Tech Stack

- **Frontend:** Angular  
  The Angular-based frontend provides a simple user interface to input relevant data and view the computed credit score.  
- **Backend:** Django  
  The backend handles data orchestration, performs credit score calculations, and integrates the various modules.  
- **Database:** SQLite (used for rapid prototyping)  
- **Testing & Hosting:** Not implemented in this version.

---

### Features

- **Data Inputs:**  
  - Bank Transaction Data: Aggregates user transaction history.  
  - Utility Bill Payments: Analyzes on-time payment trends.  
  - Psychometric Test: Evaluates behavioral patterns to estimate creditworthiness.  

- **Credit Score Generation:**  
  Based on the inputs, the system computes a preliminary credit score as output.

---

### Problem Statement
Financial exclusion remains a significant barrier for unbanked and underbanked populations. Traditional credit scoring models rely heavily on prior credit history, which excludes a large population of individuals who have no formal borrowing history. 

This project aims to create an inclusive credit scoring model by leveraging alternative data sources, thus enabling access to financial services for a wider demographic.

---

### Setup Instructions

#### Prerequisites
- Node.js
- Angular CLI
- Python 3.x
- Django Framework
- SQLite (or any lightweight database for testing)

#### Installation

1. **Clone the Repository:**  
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. **Frontend Setup (Angular):**  
   ```bash
   cd frontend
   npm install
   ng serve
   ```
   Access the frontend at `http://localhost:4200`.

3. **Backend Setup (Django):**  
   ```bash
   cd backend
   pip install -r requirements.txt
   python manage.py runserver
   ```
   Access the backend API at `http://127.0.0.1:8000`.

4. **Connect Frontend and Backend:**  
   Update the `environment.ts` file in the Angular frontend with the backend API URL.

---

### Limitations

- The POC is **not production-ready** and has **basic functionality**.  
- The psychometric test needs significant refinement to ensure accurate behavioral assessments.  
- **Data Privacy and Security** were not a focus due to time constraints.  
- Performance optimization and scalability were not considered in the current implementation.

---

### Future Enhancements

- **Integrate Real Data Sources:** Replace mocked datasets with APIs for bank transactions and utility bills.  
- **Improve Psychometric Test:** Develop a robust, research-backed psychometric evaluation module.  
- **Data Security:** Implement encryption for sensitive data.  
- **Scalability:** Use cloud services (e.g., AWS, Azure) for hosting and scaling.  
- **UI/UX:** Improve the frontend interface for better user experience.  
- **ML-Based Scoring Model:** Incorporate machine learning algorithms for more accurate credit scoring.  

---

### Credits
- Built in 24 hours of **non-stop coding** by an enthusiastic team.  
- Special thanks to the hackathon organizers for providing the platform to innovate.  

---

### Disclaimer
This project is an experimental proof of concept and **does not represent a finalized product**. The credit scores generated by this system should not be used for real-world financial decision-making. Use this project for **learning and demonstration purposes only**.

---