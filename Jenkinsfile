#!groovy

def gitlabGroup = "fpr";
def projectName = "fpr-ui-state";

node {
    tools {nodejs “node”}

    stage('Test') {
        env.NODEJS_HOME = "${tool node7}"
        env.PATH="${env.NODEJS_HOME}:${env.PATH}"
        echo ${env.PATH}
        sh 'node -version'
        sh 'npm test'
    }
}
