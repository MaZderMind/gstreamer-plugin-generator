import {Component, Input} from '@angular/core';
import {Plugin} from 'src/app/model/plugin';

@Component({
  selector: 'app-report-error',
  templateUrl: './report-error.component.html',
  styleUrls: ['./report-error.component.scss']
})
export class ReportErrorComponent {
  visible = false;

  @Input()
  plugin: Plugin;

  reportIssueUrl() {
    const body = encodeURIComponent(this.buildIssueBody());
    const subject = encodeURIComponent(this.buildIssueSubject());
    return `https://github.com/MaZderMind/gstreamer-plugin-generator/issues/new?` +
      `title=${subject}&labels=build-problem&body=${body}`;
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  private buildIssueBody() {
    return '## Description of the Problem\n' +
      'Describe the exact problem here including any console-output. Attach long logs as files.\n' +
      '\n' +
      '## Internal representation\n' +
      '```\n' +
      JSON.stringify(this.plugin, null, '\t') + '\n' +
      '```';
  }

  private buildIssueSubject() {
    return `Build-Problem with plugin "${this.plugin.name}"`;
  }
}
