pipeline {
    agent {
        kubernetes {
          cloud "kubernetes"
          yaml """
apiVersion: v1
kind: Pod
metadata:
labels:
  component: ci
spec:
  containers:
  - name: docker
    image: docker:latest
    imagePullPolicy: IfNotPresent
    command:
    - cat
    tty: true 
    volumeMounts:  
    - mountPath: /var/run/docker.sock
      name: docker-sock
  volumes:
    - name: docker-sock
      hostPath:
        path: /var/run/docker.sock
"""
        }
    }
    stages {
        stage('docker login') {
            steps {
                container('docker') {
                    
                     withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'pass', usernameVariable: 'uname')]) {
                     sh 'docker login -u $uname -p $pass'
                     
                      }
                }   
            }
        }
    }
}
