import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FeatureFlagService } from '../../services/feature-flag.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  hasContactMap = false;

  constructor(private featureFlagService: FeatureFlagService) {
    this.hasContactMap = this.featureFlagService.getFeatureFlag('hasContactMap');
  }

  ngOnInit(): void {
  }

}
