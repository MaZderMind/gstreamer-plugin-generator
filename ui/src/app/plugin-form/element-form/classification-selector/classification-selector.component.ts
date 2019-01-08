import {Component, Input} from '@angular/core';

import {Element} from 'src/app/model/element';

@Component({
  selector: 'app-classification-selector',
  templateUrl: './classification-selector.component.html',
  styleUrls: ['./classification-selector.component.scss'],
})
export class ClassificationSelectorComponent {
  @Input()
  element: Element;

  @Input()
  id: string;

  classifications = [
    'Source',
    'Sink',
    'Filter',
    'Effect',
    'Demuxer',
    'Muxer',
    'Decoder',
    'Encoder',
    'Mixer',
    'Converter',
    'Analyzer',
    'Control',
    'Extracter',
    'Formatter',
    'Connector',
    'Audio',
    'Video',
    'Image',
    'Text',
    'Metadata',
    'Network',
    'Protocol',
    'Payloader',
    'Depayloader',
    'RTP',
    'Device',
    'Visualisation',
    'Debug',
  ];
}
