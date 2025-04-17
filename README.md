# 🔍 ClaimWise: AI-Powered Insurance Fraud Detection  

**ClaimWise** is an end-to-end machine learning system that identifies fraudulent insurance claims using Kaggle datasets. It combines **data preprocessing, predictive modeling, and interactive dashboards** to deliver actionable insights for insurers.  

![System Architecture Diagram](https://via.placeholder.com/800x400?text=ClaimWise+Architecture+Flow) *(Replace with actual diagram)*  

## ✨ Key Features  

### **1. Data Pipeline**  
- **Automated Kaggle Ingestion** – Fetches and validates insurance claims data.  
- **Preprocessing** – Handles missing values, outliers, and feature engineering.  

### **2. Machine Learning Models**  
- 🎯 **Fraud Prediction** – Decision Tree Classifier (binary classification).  
- 🕵️ **Anomaly Detection** – K-Means Clustering + PCA for unsupervised fraud patterns.  

### **3. Interactive Dashboards**  
- 📊 **Claim Analytics** – Visualize trends by claim type, location, and severity.  
- ⚠️ **Fraud Risk Scoring** – Real-time predictions via a React-based UI.  

### **4. API & Deployment**  
- 🚀 **Flask/FastAPI Backend** – Serves model predictions via RESTful endpoints.  
- 🐳 **Docker Support** – Containerized for easy deployment.  

##  System Architecture  




## 🛠️ Tech Stack  

| **Category**       | **Technologies**                          |  
|--------------------|------------------------------------------|  
| **Frontend**       | React, D3.js, TailwindCSS                |  
| **Backend**        | Flask/FastAPI, Python 3.10+              |  
| **Machine Learning** | scikit-learn, Pandas, NumPy             |  
| **Data Viz**       | Plotly, Seaborn, Matplotlib              |  
| **DevOps**         | Docker, GitHub Actions                   |  

---

## 🚀 Quick Start  

### **Prerequisites**  
- Python 3.10+, Node.js 16+  
- Kaggle API key (for dataset download)  

### **Installation**  

1. **Clone the repository**  
   ```bash  
   git clone https://github.com/yourusername/claimwise.git  
   cd claimwise  
   ```  

2. **Set up the backend**  
   ```bash  
   cd backend  
   pip install -r requirements.txt  
   python app.py  # Starts API server at http://localhost:5000  
   ```  

3. **Launch the frontend**  
   ```bash  
   cd ../frontend  
   npm install  
   npm start  # Runs at http://localhost:3000  
   ```  

4. **Access the demo**  
   Open `http://localhost:3000` to view the dashboards.  

## 📜 License  
MIT License. See [LICENSE](LICENSE) for details.  

## 💡 How to Contribute  
1. Fork the repository.  
2. Open an issue to discuss proposed changes.  
3. Submit a PR with clear documentation.  

**Got questions?** Email `onkar69483@gmail.com` or open a [GitHub Issue](https://github.com/onkar69483/insurance-fraud-analysis/issues).  