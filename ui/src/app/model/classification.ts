export class Classification {

  constructor(category: string, name: string, description: string) {
    this.category = category;
    this.name = name;
    this.description = description;
  }

  // https://gstreamer.freedesktop.org/documentation/design/draft-klass.html
  static readonly CLASSIFICATIONS: Classification[] = [
    new Classification('Functional', 'Source', 'produces data'),
    new Classification('Functional', 'Sink', 'consumes data'),
    new Classification('Functional', 'Filter', 'filters/transforms data, no modification on the ' +
      'data is intended (although it might be unavoidable). The filter can decide on input and output caps independently ' +
      'of the stream contents (GstBaseTransform).'),
    new Classification('Functional', 'Effect', 'applies an effect to some data, changes to data ' +
      'are intended. Examples are colorbalance, volume. These elements can also be implemented with GstBaseTransform.'),
    new Classification('Functional', 'Demuxer', 'splits audio, video, ... from a stream'),
    new Classification('Functional', 'Muxer', 'interleave audio, video, ... into one stream, this ' +
      'is like mixing but without losing or degrading each separate input stream. The reverse operation is possible with a ' +
      'Demuxer that reproduces the exact same input streams.'),
    new Classification('Functional', 'Decoder', 'decodes encoded data into a raw format, there is ' +
      'typically no relation between input caps and output caps. The output caps are defined in the stream data. This ' +
      'separates the Decoder from the Filter and Effect.'),
    new Classification('Functional', 'Encoder', 'encodes raw data into an encoded format.'),
    new Classification('Functional', 'Mixer', 'combine audio, video, .. this is like muxing but ' +
      'with applying some algorithm so that the individual streams are not extractable anymore, there is therefore no reverse ' +
      'operation to mixing. (audio mixer, video mixer, ...)'),
    new Classification('Functional', 'Converter', 'convert audio into video, text to audio, ... ' +
      'The converter typically works on raw types only. The source media type is listed first.'),
    new Classification('Functional', 'Analyzer', 'reports about the stream contents.'),
    new Classification('Functional', 'Control', 'controls some aspect of a hardware device'),
    new Classification('Functional', 'Extracter', 'extracts tags/headers from a stream'),
    new Classification('Functional', 'Formatter', 'adds tags/headers to a stream'),
    new Classification('Functional', 'Connector', 'allows for new connections in the pipeline. (tee, ...)'),

    new Classification('Media Type', 'Audio', 'operates on audio data'),
    new Classification('Media Type', 'Video', 'operates on video data'),
    new Classification('Media Type', 'Image', 'operates on image data. Usually this media type ' +
      'can also be used to make a video stream in which case it is added together with the Video media type.'),
    new Classification('Media Type', 'Text', 'operates on text data'),
    new Classification('Media Type', 'Metadata', 'operates on metadata'),

    new Classification('Extra features', 'Network', 'element is used in networked situations'),
    new Classification('Extra features', 'Protocol', 'implements some protocol (RTSP, HTTP, ...)'),
    new Classification('Extra features', 'Payloader', 'encapsulate as payload (RTP, RDT,.. )'),
    new Classification('Extra features', 'Depayloader', 'strip a payload (RTP, RDT,.. )'),
    new Classification('Extra features', 'RTP', 'intended to be used in RTP applications'),
    new Classification('Extra features', 'Device', 'operates on some hardware device (disk, network, ' +
      'audio card, video card, usb, ...)'),
    new Classification('Extra features', 'Visualisation', 'intended to be used for audio visualisation'),
    new Classification('Extra features', 'Debug', 'intended usage is more for debugging purposes.'),
  ];

  readonly category: string;
  readonly name: string;
  readonly description: string;

  static byName(name: string): Classification {
    return Classification.CLASSIFICATIONS.find(classification => classification.name === name);
  }

  static fromJson(classification: any) {
    if (classification && classification.name) {
      return this.byName(classification.name);
    }
    return this.byName(classification);
  }

  static getClassificationsByCategory(): { category: string, classifications: Classification[] }[] {
    const byCategoryDict = Classification.CLASSIFICATIONS.reduce(
      (dict, classification) => {
        if (!dict[classification.category]) {
          dict[classification.category] = [];
        }
        dict[classification.category].push(classification);
        return dict;
      }, {});

    return Object.keys(byCategoryDict).map(key => ({
      category: key,
      classifications: byCategoryDict[key]
    }));
  }

  toString() {
    return this.name;
  }

  toJSON() {
    return this.name;
  }
}
