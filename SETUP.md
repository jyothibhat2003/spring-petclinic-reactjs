# Spring PetClinic ReactJS Setup

This project has two parts:

- Backend: Spring Boot REST API
- Frontend: React + TypeScript client

## 1. Install Required Software

Install these on Windows before opening the project in VS Code.

1. Java JDK
   - Recommended: JDK 17 or JDK 21
   - Verified here: Java 23.0.2 also starts the backend

2. Node.js and npm
   - Recommended: Node.js 20 LTS or newer
   - Verified here: Node.js 24.15.0 and npm 11.12.1

3. Git
   - Verified here: Git 2.51.0

4. VS Code

## 2. Recommended VS Code Extensions

Install these extensions in VS Code:

1. Extension Pack for Java
   - Extension id: `vscjava.vscode-java-pack`

2. Spring Boot Extension Pack
   - Extension id: `vmware.vscode-boot-dev-pack`

3. Maven for Java
   - Extension id: `vscjava.vscode-maven`

4. ESLint
   - Extension id: `dbaeumer.vscode-eslint`

5. npm Intellisense
   - Extension id: `christian-kohler.npm-intellisense`

6. GitHub Pull Requests
   - Extension id: `GitHub.vscode-pull-request-github`

## 3. Open Project in VS Code

1. Open VS Code.
2. Select `File > Open Folder`.
3. Open this folder:

   ```text
   C:\Users\Admin\Downloads\spring-petclinic-reactjs-main
   ```

4. Open the VS Code terminal:

   ```text
   Terminal > New Terminal
   ```

## 4. Install Backend Dependencies

From the project root:

```powershell
.\mvnw.cmd -DskipTests package
```

This downloads Maven dependencies and creates:

```text
target\spring-petclinic-rest-3.2.1.jar
```

## 5. Install Frontend Dependencies

From the project root:

```powershell
cd client
npm install --legacy-peer-deps
cd ..
```

`--legacy-peer-deps` is required because this frontend uses an older React/Webpack toolchain.

## 6. Run Backend

Open terminal 1 in the project root:

```powershell
.\run-backend.bat
```

Wait until the backend prints that the application has started.

Backend URL:

```text
http://localhost:9966/petclinic/
```

Example API URL:

```text
http://localhost:9966/petclinic/api/pettypes
```

## 7. Run Frontend

Open terminal 2 in the project root:

```powershell
.\run-frontend.bat
```

Frontend URL:

```text
http://localhost:4444/
```

## 8. Stop the Project

In each terminal, press:

```text
Ctrl + C
```

Stop both:

1. Frontend terminal
2. Backend terminal

## 9. Useful Commands

Build backend:

```powershell
.\mvnw.cmd -DskipTests package
```

Run backend with Maven:

```powershell
.\mvnw.cmd spring-boot:run
```

Install frontend packages:

```powershell
cd client
npm install --legacy-peer-deps
```

Run frontend:

```powershell
cd client
$env:PORT="4444"
npm start
```

Build frontend:

```powershell
cd client
npm run build:clean
```

## 10. Versions Used by This Project

Backend:

- Spring Boot: 3.2.1
- Maven Wrapper: Maven 3.6.3
- Java verified locally: 23.0.2

Frontend:

- React: 15.x
- React Router: 2.x
- TypeScript: 2.0.x
- Webpack: 1.x
- Node verified locally: 24.15.0
- npm verified locally: 11.12.1

## 11. Common Problems

If `npm install` fails with peer dependency errors, run:

```powershell
npm install --legacy-peer-deps
```

If the frontend cannot load data, make sure the backend is already running on:

```text
http://localhost:9966/petclinic/
```

If port `4444` is busy, run the frontend on another port:

```powershell
cd client
$env:PORT="3000"
npm start
```
