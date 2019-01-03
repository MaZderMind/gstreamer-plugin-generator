export class Archetype {
  // https://gstreamer.freedesktop.org/data/doc/gstreamer/head/gstreamer-libs/html/GstBaseTransform.html#GstBaseTransform.object-hierarchy
  static readonly ARCHETYPES: Archetype[] = [
    new Archetype(
      'TRANSFORM',
      'Creates an Element based on GstBaseTransform. This base class is for filter elements that process ' +
      'data. Elements that are suitable for implementation using GstBaseTransform are ones where the size and caps ' +
      'of the output is known entirely from the input caps and buffer sizes. These include elements that directly ' +
      'transform one buffer into another, modify the contents of a buffer in-place, as well as elements that collate ' +
      'multiple input buffers into one output buffer, or that expand one input buffer into multiple output buffers.'),

    new Archetype(
      'SINK',
      'Create an Element based on GstBaseSink. GstBaseSink is the base class for sink elements in GStreamer, ' +
      'such as xvimagesink or filesink. It is a layer on top of GstElement that provides a simplified interface to ' +
      'plugin writers. GstBaseSink handles many details for you, for example: preroll, clock synchronization, state ' +
      'changes, activation in push or pull mode, and queries.'),

    new Archetype(
      'SOURCE',
      'Create an Element based on GstBaseSrc. This is a generic base class for source elements. The ' +
      'following types of sources are supported: random access sources like files, seekable sources, live sources'),

    new Archetype(
      'SOURCE',
      'Create an Element based on GstPushrc. This class is mostly useful for elements that cannot do ' +
      'random access, or at least very slowly. The source usually prefers to push out a fixed size buffer.'),
  ];

  // TODO add GstBaseParse

  readonly name: string;
  readonly description: string;

  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  toString() {
    return this.name;
  }

  toJSON() {
    return this.name;
  }

  static byName(name: any): Archetype {
    return Archetype.ARCHETYPES.find(archetype => archetype.name == name);
  }
}
