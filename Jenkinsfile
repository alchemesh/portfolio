
pipeline {
  agent any
  stages {
    
    stage('Containerization') {
      steps {
        sh 'echo Docker Build Image..'
        sh 'docker build -t sabatiel180/my-portfolio:v1 .'
        sh 'echo Docker Tag Image....'
        sh 'echo Docker Push Image......'
        sh 'docker login'
        sh 'docker push sabatiel180/my-portfolio:v1'
      }
    }

    stage('Kubernetes Deployment') {
      steps {
        sh 'echo Deploy to Kubernetes using ArgoCD'
      }
    }
    
    stage('Integration Testing') {
      steps {
        sh "sleep 20s"
        sh 'echo Testing using cURL commands......'
      }
    }
  }
  tools {
    maven 'M398'
  }

}
