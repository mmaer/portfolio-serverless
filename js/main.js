import React from 'react';
import ReactDOM from 'react-dom';
// import new custom react component
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "All You Need",
    'href': "https://www.github.com/pearcem0/all-you-need-window-manager",
    'desc': "FVWM based window manager. Powerful yet disctraction free. Lightweight, (sort of) customisable. Encourages the user to a. Use the command line more, and b. fix what they don't like about the window manager themselves by customising the FVWM Script.",
    'image': {
      'desc': "",
      'source': "images/ayn.png",
      'comment': ""
    }
  }, {
    'title': "AWS Lambda Snapshot Backup & Prune",
    'href': "https://www.github.com/pearcem0/aws-backup-lambda",
    'desc': "AWS lambda scripts to run weekly backup snapshots and additional pruning of old snapshots. Scripts written in python.",
    'image': {
      'desc': "",
      'source': "images/aws.png",
      'comment': ""
    }
  }, {
    'title': "Salesforce Administration Areas",
    'href': "https://www.github.com/pearcem0/salesforce-adminareas",
    'desc': "Map administrative area information to a custom salesforce object using the records post code and external api calls.",
    'image': {
      'desc': "",
      'source': "images/sf.png",
      // use backticks to use javascript template string, on multi line
      'comment': ""
    }
  }
]
ReactDOM.render(
  <ExampleWork work={myWork}/>, document.getElementById('example-work'));

function ResponsiveImage({src, width, height}) {
  return (
    <div style={{
      width
    }} className="responsive-image">
      <div style={{
        paddingBottom: (height / width * 100) + '%'
      }}/>
      <img src={src} className="responsive-image__image"/>
    </div>
  );
}

ReactDOM.render(
  <ResponsiveImage src="images/serverless_diagram.png" width={1200} height={800}/>, document.getElementById('serverlessDiagram'));
