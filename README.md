# **TechLearningTracker**

## **Project Description**

TechLearningTracker is a RESTful API designed to help users track their learning progress and problem-solving activities in preparation for technical interviews. The application enables users to:
- Track technologies or concepts they are learning.
- Record problems they have solved, along with solutions and dates.

This tool serves as a comprehensive tracker for technical interview preparation, allowing users to organize and monitor their progress efficiently.

---

## **Features**

1. **Learning Item Management**:
   - Add, view, and manage technologies or topics being learned.
   - Record start dates and completion statuses.

2. **Problem Solving Tracker**:
   - Add, view, and manage solved problems.
   - Store problem descriptions, solutions, and dates solved.

3. **Database Integration**:
   - Supports PostgreSQL for persistent data storage.

4. **Scalable Design**:
   - Built using clean architecture principles and adheres to SOLID principles for maintainable and testable code.

5. **Test-Driven Development**:
   - Unit tests written with xUnit and mocked dependencies using Moq.

---

## **Technical Stack**

### **Backend**
- **Framework**: .NET 8.0
- **Language**: C#
- **Architecture**: Clean Architecture
- **Design Principles**: SOLID
- **Development Methodology**: Test-Driven Development (TDD)

### **Database**
- **DBMS**: PostgreSQL
- **ORM**: Entity Framework Core with Npgsql

### **Testing**
- **Test Framework**: xUnit
- **Mocking**: Moq

### **Tools**
- **API Documentation**: Swagger
- **EF Core Migrations**: dotnet CLI
- **Dependency Injection**: Microsoft.Extensions.DependencyInjection

---

## **Installation**

### Prerequisites
- .NET 8.0 SDK
- PostgreSQL Database
- Entity Framework Core tools

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/imparthibank/tech-learning-tracker.git
   cd TechLearningTracker
