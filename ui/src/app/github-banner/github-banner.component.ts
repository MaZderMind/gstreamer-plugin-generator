import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-github-banner',
  templateUrl: './github-banner.component.html',
  styleUrls: ['./github-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubBannerComponent {

}
