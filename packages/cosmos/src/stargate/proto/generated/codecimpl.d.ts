import * as $protobuf from 'protobufjs';
/** Namespace cosmos. */
export namespace cosmos {
  /** Namespace bank. */
  namespace bank {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a Params. */
      interface IParams {
        /** Params sendEnabled */
        sendEnabled?: cosmos.bank.v1beta1.ISendEnabled[] | null;

        /** Params defaultSendEnabled */
        defaultSendEnabled?: boolean | null;
      }

      /** Represents a Params. */
      class Params implements IParams {
        /**
         * Constructs a new Params.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IParams);

        /** Params sendEnabled. */
        public sendEnabled: cosmos.bank.v1beta1.ISendEnabled[];

        /** Params defaultSendEnabled. */
        public defaultSendEnabled: boolean;

        /**
         * Creates a new Params instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Params instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IParams
        ): cosmos.bank.v1beta1.Params;

        /**
         * Encodes the specified Params message. Does not implicitly {@link cosmos.bank.v1beta1.Params.verify|verify} messages.
         * @param m Params message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IParams,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Params message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Params
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.Params;

        /**
         * Creates a Params message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Params
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.Params;

        /**
         * Creates a plain object from a Params message. Also converts values to other types if specified.
         * @param m Params
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.Params,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Params to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a SendEnabled. */
      interface ISendEnabled {
        /** SendEnabled denom */
        denom?: string | null;

        /** SendEnabled enabled */
        enabled?: boolean | null;
      }

      /** Represents a SendEnabled. */
      class SendEnabled implements ISendEnabled {
        /**
         * Constructs a new SendEnabled.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.ISendEnabled);

        /** SendEnabled denom. */
        public denom: string;

        /** SendEnabled enabled. */
        public enabled: boolean;

        /**
         * Creates a new SendEnabled instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendEnabled instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.ISendEnabled
        ): cosmos.bank.v1beta1.SendEnabled;

        /**
         * Encodes the specified SendEnabled message. Does not implicitly {@link cosmos.bank.v1beta1.SendEnabled.verify|verify} messages.
         * @param m SendEnabled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.ISendEnabled,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SendEnabled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SendEnabled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.SendEnabled;

        /**
         * Creates a SendEnabled message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns SendEnabled
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.SendEnabled;

        /**
         * Creates a plain object from a SendEnabled message. Also converts values to other types if specified.
         * @param m SendEnabled
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.SendEnabled,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SendEnabled to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an Input. */
      interface IInput {
        /** Input address */
        address?: string | null;

        /** Input coins */
        coins?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents an Input. */
      class Input implements IInput {
        /**
         * Constructs a new Input.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IInput);

        /** Input address. */
        public address: string;

        /** Input coins. */
        public coins: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Input instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Input instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IInput
        ): cosmos.bank.v1beta1.Input;

        /**
         * Encodes the specified Input message. Does not implicitly {@link cosmos.bank.v1beta1.Input.verify|verify} messages.
         * @param m Input message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IInput,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.Input;

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Input
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.Input;

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @param m Input
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.Input,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Input to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an Output. */
      interface IOutput {
        /** Output address */
        address?: string | null;

        /** Output coins */
        coins?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents an Output. */
      class Output implements IOutput {
        /**
         * Constructs a new Output.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IOutput);

        /** Output address. */
        public address: string;

        /** Output coins. */
        public coins: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Output instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Output instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IOutput
        ): cosmos.bank.v1beta1.Output;

        /**
         * Encodes the specified Output message. Does not implicitly {@link cosmos.bank.v1beta1.Output.verify|verify} messages.
         * @param m Output message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IOutput,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.Output;

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Output
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.Output;

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @param m Output
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.Output,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Output to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a Supply. */
      interface ISupply {
        /** Supply total */
        total?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a Supply. */
      class Supply implements ISupply {
        /**
         * Constructs a new Supply.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.ISupply);

        /** Supply total. */
        public total: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new Supply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Supply instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.ISupply
        ): cosmos.bank.v1beta1.Supply;

        /**
         * Encodes the specified Supply message. Does not implicitly {@link cosmos.bank.v1beta1.Supply.verify|verify} messages.
         * @param m Supply message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.ISupply,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Supply message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Supply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.Supply;

        /**
         * Creates a Supply message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Supply
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.Supply;

        /**
         * Creates a plain object from a Supply message. Also converts values to other types if specified.
         * @param m Supply
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.Supply,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Supply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DenomUnit. */
      interface IDenomUnit {
        /** DenomUnit denom */
        denom?: string | null;

        /** DenomUnit exponent */
        exponent?: number | null;

        /** DenomUnit aliases */
        aliases?: string[] | null;
      }

      /** Represents a DenomUnit. */
      class DenomUnit implements IDenomUnit {
        /**
         * Constructs a new DenomUnit.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IDenomUnit);

        /** DenomUnit denom. */
        public denom: string;

        /** DenomUnit exponent. */
        public exponent: number;

        /** DenomUnit aliases. */
        public aliases: string[];

        /**
         * Creates a new DenomUnit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DenomUnit instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IDenomUnit
        ): cosmos.bank.v1beta1.DenomUnit;

        /**
         * Encodes the specified DenomUnit message. Does not implicitly {@link cosmos.bank.v1beta1.DenomUnit.verify|verify} messages.
         * @param m DenomUnit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IDenomUnit,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DenomUnit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DenomUnit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.DenomUnit;

        /**
         * Creates a DenomUnit message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns DenomUnit
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.DenomUnit;

        /**
         * Creates a plain object from a DenomUnit message. Also converts values to other types if specified.
         * @param m DenomUnit
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.DenomUnit,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DenomUnit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a Metadata. */
      interface IMetadata {
        /** Metadata description */
        description?: string | null;

        /** Metadata denomUnits */
        denomUnits?: cosmos.bank.v1beta1.IDenomUnit[] | null;

        /** Metadata base */
        base?: string | null;

        /** Metadata display */
        display?: string | null;

        /** Metadata name */
        name?: string | null;

        /** Metadata symbol */
        symbol?: string | null;
      }

      /** Represents a Metadata. */
      class Metadata implements IMetadata {
        /**
         * Constructs a new Metadata.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMetadata);

        /** Metadata description. */
        public description: string;

        /** Metadata denomUnits. */
        public denomUnits: cosmos.bank.v1beta1.IDenomUnit[];

        /** Metadata base. */
        public base: string;

        /** Metadata display. */
        public display: string;

        /** Metadata name. */
        public name: string;

        /** Metadata symbol. */
        public symbol: string;

        /**
         * Creates a new Metadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metadata instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IMetadata
        ): cosmos.bank.v1beta1.Metadata;

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link cosmos.bank.v1beta1.Metadata.verify|verify} messages.
         * @param m Metadata message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IMetadata,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.Metadata;

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Metadata
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.Metadata;

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @param m Metadata
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.Metadata,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Metadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Represents a Msg */
      class Msg extends $protobuf.rpc.Service {
        /**
         * Constructs a new Msg service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean
        );

        /**
         * Creates new Msg service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean
        ): Msg;

        /**
         * Calls Send.
         * @param request MsgSend message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgSendResponse
         */
        public send(
          request: cosmos.bank.v1beta1.IMsgSend,
          callback: cosmos.bank.v1beta1.Msg.SendCallback
        ): void;

        /**
         * Calls Send.
         * @param request MsgSend message or plain object
         * @returns Promise
         */
        public send(
          request: cosmos.bank.v1beta1.IMsgSend
        ): Promise<cosmos.bank.v1beta1.MsgSendResponse>;

        /**
         * Calls MultiSend.
         * @param request MsgMultiSend message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgMultiSendResponse
         */
        public multiSend(
          request: cosmos.bank.v1beta1.IMsgMultiSend,
          callback: cosmos.bank.v1beta1.Msg.MultiSendCallback
        ): void;

        /**
         * Calls MultiSend.
         * @param request MsgMultiSend message or plain object
         * @returns Promise
         */
        public multiSend(
          request: cosmos.bank.v1beta1.IMsgMultiSend
        ): Promise<cosmos.bank.v1beta1.MsgMultiSendResponse>;
      }

      namespace Msg {
        /**
         * Callback as used by {@link cosmos.bank.v1beta1.Msg#send}.
         * @param error Error, if any
         * @param [response] MsgSendResponse
         */
        type SendCallback = (
          error: Error | null,
          response?: cosmos.bank.v1beta1.MsgSendResponse
        ) => void;

        /**
         * Callback as used by {@link cosmos.bank.v1beta1.Msg#multiSend}.
         * @param error Error, if any
         * @param [response] MsgMultiSendResponse
         */
        type MultiSendCallback = (
          error: Error | null,
          response?: cosmos.bank.v1beta1.MsgMultiSendResponse
        ) => void;
      }

      /** Properties of a MsgSend. */
      interface IMsgSend {
        /** MsgSend fromAddress */
        fromAddress?: string | null;

        /** MsgSend toAddress */
        toAddress?: string | null;

        /** MsgSend amount */
        amount?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a MsgSend. */
      class MsgSend implements IMsgSend {
        /**
         * Constructs a new MsgSend.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMsgSend);

        /** MsgSend fromAddress. */
        public fromAddress: string;

        /** MsgSend toAddress. */
        public toAddress: string;

        /** MsgSend amount. */
        public amount: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new MsgSend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgSend instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IMsgSend
        ): cosmos.bank.v1beta1.MsgSend;

        /**
         * Encodes the specified MsgSend message. Does not implicitly {@link cosmos.bank.v1beta1.MsgSend.verify|verify} messages.
         * @param m MsgSend message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IMsgSend,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgSend message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.MsgSend;

        /**
         * Creates a MsgSend message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgSend
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.MsgSend;

        /**
         * Creates a plain object from a MsgSend message. Also converts values to other types if specified.
         * @param m MsgSend
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.MsgSend,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgSend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgSendResponse. */
      interface IMsgSendResponse {}

      /** Represents a MsgSendResponse. */
      class MsgSendResponse implements IMsgSendResponse {
        /**
         * Constructs a new MsgSendResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMsgSendResponse);

        /**
         * Creates a new MsgSendResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgSendResponse instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IMsgSendResponse
        ): cosmos.bank.v1beta1.MsgSendResponse;

        /**
         * Encodes the specified MsgSendResponse message. Does not implicitly {@link cosmos.bank.v1beta1.MsgSendResponse.verify|verify} messages.
         * @param m MsgSendResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IMsgSendResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgSendResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.MsgSendResponse;

        /**
         * Creates a MsgSendResponse message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgSendResponse
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.MsgSendResponse;

        /**
         * Creates a plain object from a MsgSendResponse message. Also converts values to other types if specified.
         * @param m MsgSendResponse
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.MsgSendResponse,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgSendResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgMultiSend. */
      interface IMsgMultiSend {
        /** MsgMultiSend inputs */
        inputs?: cosmos.bank.v1beta1.IInput[] | null;

        /** MsgMultiSend outputs */
        outputs?: cosmos.bank.v1beta1.IOutput[] | null;
      }

      /** Represents a MsgMultiSend. */
      class MsgMultiSend implements IMsgMultiSend {
        /**
         * Constructs a new MsgMultiSend.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMsgMultiSend);

        /** MsgMultiSend inputs. */
        public inputs: cosmos.bank.v1beta1.IInput[];

        /** MsgMultiSend outputs. */
        public outputs: cosmos.bank.v1beta1.IOutput[];

        /**
         * Creates a new MsgMultiSend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgMultiSend instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IMsgMultiSend
        ): cosmos.bank.v1beta1.MsgMultiSend;

        /**
         * Encodes the specified MsgMultiSend message. Does not implicitly {@link cosmos.bank.v1beta1.MsgMultiSend.verify|verify} messages.
         * @param m MsgMultiSend message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IMsgMultiSend,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgMultiSend message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgMultiSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.MsgMultiSend;

        /**
         * Creates a MsgMultiSend message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgMultiSend
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.MsgMultiSend;

        /**
         * Creates a plain object from a MsgMultiSend message. Also converts values to other types if specified.
         * @param m MsgMultiSend
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.MsgMultiSend,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgMultiSend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgMultiSendResponse. */
      interface IMsgMultiSendResponse {}

      /** Represents a MsgMultiSendResponse. */
      class MsgMultiSendResponse implements IMsgMultiSendResponse {
        /**
         * Constructs a new MsgMultiSendResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.bank.v1beta1.IMsgMultiSendResponse);

        /**
         * Creates a new MsgMultiSendResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgMultiSendResponse instance
         */
        public static create(
          properties?: cosmos.bank.v1beta1.IMsgMultiSendResponse
        ): cosmos.bank.v1beta1.MsgMultiSendResponse;

        /**
         * Encodes the specified MsgMultiSendResponse message. Does not implicitly {@link cosmos.bank.v1beta1.MsgMultiSendResponse.verify|verify} messages.
         * @param m MsgMultiSendResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.bank.v1beta1.IMsgMultiSendResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgMultiSendResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgMultiSendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.bank.v1beta1.MsgMultiSendResponse;

        /**
         * Creates a MsgMultiSendResponse message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgMultiSendResponse
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.bank.v1beta1.MsgMultiSendResponse;

        /**
         * Creates a plain object from a MsgMultiSendResponse message. Also converts values to other types if specified.
         * @param m MsgMultiSendResponse
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.bank.v1beta1.MsgMultiSendResponse,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgMultiSendResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }

  /** Namespace staking. */
  namespace staking {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Represents a Msg */
      class Msg extends $protobuf.rpc.Service {
        /**
         * Constructs a new Msg service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean
        );

        /**
         * Creates new Msg service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean
        ): Msg;

        /**
         * Calls Delegate.
         * @param request MsgDelegate message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgDelegateResponse
         */
        public delegate(
          request: cosmos.staking.v1beta1.IMsgDelegate,
          callback: cosmos.staking.v1beta1.Msg.DelegateCallback
        ): void;

        /**
         * Calls Delegate.
         * @param request MsgDelegate message or plain object
         * @returns Promise
         */
        public delegate(
          request: cosmos.staking.v1beta1.IMsgDelegate
        ): Promise<cosmos.staking.v1beta1.MsgDelegateResponse>;

        /**
         * Calls BeginRedelegate.
         * @param request MsgBeginRedelegate message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgBeginRedelegateResponse
         */
        public beginRedelegate(
          request: cosmos.staking.v1beta1.IMsgBeginRedelegate,
          callback: cosmos.staking.v1beta1.Msg.BeginRedelegateCallback
        ): void;

        /**
         * Calls BeginRedelegate.
         * @param request MsgBeginRedelegate message or plain object
         * @returns Promise
         */
        public beginRedelegate(
          request: cosmos.staking.v1beta1.IMsgBeginRedelegate
        ): Promise<cosmos.staking.v1beta1.MsgBeginRedelegateResponse>;

        /**
         * Calls Undelegate.
         * @param request MsgUndelegate message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgUndelegateResponse
         */
        public undelegate(
          request: cosmos.staking.v1beta1.IMsgUndelegate,
          callback: cosmos.staking.v1beta1.Msg.UndelegateCallback
        ): void;

        /**
         * Calls Undelegate.
         * @param request MsgUndelegate message or plain object
         * @returns Promise
         */
        public undelegate(
          request: cosmos.staking.v1beta1.IMsgUndelegate
        ): Promise<cosmos.staking.v1beta1.MsgUndelegateResponse>;
      }

      namespace Msg {
        /**
         * Callback as used by {@link cosmos.staking.v1beta1.Msg#delegate}.
         * @param error Error, if any
         * @param [response] MsgDelegateResponse
         */
        type DelegateCallback = (
          error: Error | null,
          response?: cosmos.staking.v1beta1.MsgDelegateResponse
        ) => void;

        /**
         * Callback as used by {@link cosmos.staking.v1beta1.Msg#beginRedelegate}.
         * @param error Error, if any
         * @param [response] MsgBeginRedelegateResponse
         */
        type BeginRedelegateCallback = (
          error: Error | null,
          response?: cosmos.staking.v1beta1.MsgBeginRedelegateResponse
        ) => void;

        /**
         * Callback as used by {@link cosmos.staking.v1beta1.Msg#undelegate}.
         * @param error Error, if any
         * @param [response] MsgUndelegateResponse
         */
        type UndelegateCallback = (
          error: Error | null,
          response?: cosmos.staking.v1beta1.MsgUndelegateResponse
        ) => void;
      }

      /** Properties of a MsgDelegate. */
      interface IMsgDelegate {
        /** MsgDelegate delegatorAddress */
        delegatorAddress?: string | null;

        /** MsgDelegate validatorAddress */
        validatorAddress?: string | null;

        /** MsgDelegate amount */
        amount?: cosmos.base.v1beta1.ICoin | null;
      }

      /** Represents a MsgDelegate. */
      class MsgDelegate implements IMsgDelegate {
        /**
         * Constructs a new MsgDelegate.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgDelegate);

        /** MsgDelegate delegatorAddress. */
        public delegatorAddress: string;

        /** MsgDelegate validatorAddress. */
        public validatorAddress: string;

        /** MsgDelegate amount. */
        public amount?: cosmos.base.v1beta1.ICoin | null;

        /**
         * Creates a new MsgDelegate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDelegate instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgDelegate
        ): cosmos.staking.v1beta1.MsgDelegate;

        /**
         * Encodes the specified MsgDelegate message. Does not implicitly {@link cosmos.staking.v1beta1.MsgDelegate.verify|verify} messages.
         * @param m MsgDelegate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgDelegate,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgDelegate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgDelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.staking.v1beta1.MsgDelegate;

        /**
         * Creates a MsgDelegate message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgDelegate
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.staking.v1beta1.MsgDelegate;

        /**
         * Creates a plain object from a MsgDelegate message. Also converts values to other types if specified.
         * @param m MsgDelegate
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.staking.v1beta1.MsgDelegate,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgDelegate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgDelegateResponse. */
      interface IMsgDelegateResponse {}

      /** Represents a MsgDelegateResponse. */
      class MsgDelegateResponse implements IMsgDelegateResponse {
        /**
         * Constructs a new MsgDelegateResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgDelegateResponse);

        /**
         * Creates a new MsgDelegateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDelegateResponse instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgDelegateResponse
        ): cosmos.staking.v1beta1.MsgDelegateResponse;

        /**
         * Encodes the specified MsgDelegateResponse message. Does not implicitly {@link cosmos.staking.v1beta1.MsgDelegateResponse.verify|verify} messages.
         * @param m MsgDelegateResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgDelegateResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgDelegateResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgDelegateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.staking.v1beta1.MsgDelegateResponse;

        /**
         * Creates a MsgDelegateResponse message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgDelegateResponse
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.staking.v1beta1.MsgDelegateResponse;

        /**
         * Creates a plain object from a MsgDelegateResponse message. Also converts values to other types if specified.
         * @param m MsgDelegateResponse
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.staking.v1beta1.MsgDelegateResponse,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgDelegateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgBeginRedelegate. */
      interface IMsgBeginRedelegate {
        /** MsgBeginRedelegate delegatorAddress */
        delegatorAddress?: string | null;

        /** MsgBeginRedelegate validatorSrcAddress */
        validatorSrcAddress?: string | null;

        /** MsgBeginRedelegate validatorDstAddress */
        validatorDstAddress?: string | null;

        /** MsgBeginRedelegate amount */
        amount?: cosmos.base.v1beta1.ICoin | null;
      }

      /** Represents a MsgBeginRedelegate. */
      class MsgBeginRedelegate implements IMsgBeginRedelegate {
        /**
         * Constructs a new MsgBeginRedelegate.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgBeginRedelegate);

        /** MsgBeginRedelegate delegatorAddress. */
        public delegatorAddress: string;

        /** MsgBeginRedelegate validatorSrcAddress. */
        public validatorSrcAddress: string;

        /** MsgBeginRedelegate validatorDstAddress. */
        public validatorDstAddress: string;

        /** MsgBeginRedelegate amount. */
        public amount?: cosmos.base.v1beta1.ICoin | null;

        /**
         * Creates a new MsgBeginRedelegate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgBeginRedelegate instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgBeginRedelegate
        ): cosmos.staking.v1beta1.MsgBeginRedelegate;

        /**
         * Encodes the specified MsgBeginRedelegate message. Does not implicitly {@link cosmos.staking.v1beta1.MsgBeginRedelegate.verify|verify} messages.
         * @param m MsgBeginRedelegate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgBeginRedelegate,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgBeginRedelegate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgBeginRedelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.staking.v1beta1.MsgBeginRedelegate;

        /**
         * Creates a MsgBeginRedelegate message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgBeginRedelegate
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.staking.v1beta1.MsgBeginRedelegate;

        /**
         * Creates a plain object from a MsgBeginRedelegate message. Also converts values to other types if specified.
         * @param m MsgBeginRedelegate
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.staking.v1beta1.MsgBeginRedelegate,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgBeginRedelegate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgBeginRedelegateResponse. */
      interface IMsgBeginRedelegateResponse {
        /** MsgBeginRedelegateResponse completionTime */
        completionTime?: google.protobuf.ITimestamp | null;
      }

      /** Represents a MsgBeginRedelegateResponse. */
      class MsgBeginRedelegateResponse implements IMsgBeginRedelegateResponse {
        /**
         * Constructs a new MsgBeginRedelegateResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgBeginRedelegateResponse);

        /** MsgBeginRedelegateResponse completionTime. */
        public completionTime?: google.protobuf.ITimestamp | null;

        /**
         * Creates a new MsgBeginRedelegateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgBeginRedelegateResponse instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgBeginRedelegateResponse
        ): cosmos.staking.v1beta1.MsgBeginRedelegateResponse;

        /**
         * Encodes the specified MsgBeginRedelegateResponse message. Does not implicitly {@link cosmos.staking.v1beta1.MsgBeginRedelegateResponse.verify|verify} messages.
         * @param m MsgBeginRedelegateResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgBeginRedelegateResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgBeginRedelegateResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgBeginRedelegateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.staking.v1beta1.MsgBeginRedelegateResponse;

        /**
         * Creates a MsgBeginRedelegateResponse message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgBeginRedelegateResponse
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.staking.v1beta1.MsgBeginRedelegateResponse;

        /**
         * Creates a plain object from a MsgBeginRedelegateResponse message. Also converts values to other types if specified.
         * @param m MsgBeginRedelegateResponse
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.staking.v1beta1.MsgBeginRedelegateResponse,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgBeginRedelegateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgUndelegate. */
      interface IMsgUndelegate {
        /** MsgUndelegate delegatorAddress */
        delegatorAddress?: string | null;

        /** MsgUndelegate validatorAddress */
        validatorAddress?: string | null;

        /** MsgUndelegate amount */
        amount?: cosmos.base.v1beta1.ICoin | null;
      }

      /** Represents a MsgUndelegate. */
      class MsgUndelegate implements IMsgUndelegate {
        /**
         * Constructs a new MsgUndelegate.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgUndelegate);

        /** MsgUndelegate delegatorAddress. */
        public delegatorAddress: string;

        /** MsgUndelegate validatorAddress. */
        public validatorAddress: string;

        /** MsgUndelegate amount. */
        public amount?: cosmos.base.v1beta1.ICoin | null;

        /**
         * Creates a new MsgUndelegate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgUndelegate instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgUndelegate
        ): cosmos.staking.v1beta1.MsgUndelegate;

        /**
         * Encodes the specified MsgUndelegate message. Does not implicitly {@link cosmos.staking.v1beta1.MsgUndelegate.verify|verify} messages.
         * @param m MsgUndelegate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgUndelegate,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgUndelegate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgUndelegate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.staking.v1beta1.MsgUndelegate;

        /**
         * Creates a MsgUndelegate message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgUndelegate
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.staking.v1beta1.MsgUndelegate;

        /**
         * Creates a plain object from a MsgUndelegate message. Also converts values to other types if specified.
         * @param m MsgUndelegate
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.staking.v1beta1.MsgUndelegate,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgUndelegate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgUndelegateResponse. */
      interface IMsgUndelegateResponse {
        /** MsgUndelegateResponse completionTime */
        completionTime?: google.protobuf.ITimestamp | null;
      }

      /** Represents a MsgUndelegateResponse. */
      class MsgUndelegateResponse implements IMsgUndelegateResponse {
        /**
         * Constructs a new MsgUndelegateResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.staking.v1beta1.IMsgUndelegateResponse);

        /** MsgUndelegateResponse completionTime. */
        public completionTime?: google.protobuf.ITimestamp | null;

        /**
         * Creates a new MsgUndelegateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgUndelegateResponse instance
         */
        public static create(
          properties?: cosmos.staking.v1beta1.IMsgUndelegateResponse
        ): cosmos.staking.v1beta1.MsgUndelegateResponse;

        /**
         * Encodes the specified MsgUndelegateResponse message. Does not implicitly {@link cosmos.staking.v1beta1.MsgUndelegateResponse.verify|verify} messages.
         * @param m MsgUndelegateResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.staking.v1beta1.IMsgUndelegateResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgUndelegateResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgUndelegateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.staking.v1beta1.MsgUndelegateResponse;

        /**
         * Creates a MsgUndelegateResponse message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgUndelegateResponse
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.staking.v1beta1.MsgUndelegateResponse;

        /**
         * Creates a plain object from a MsgUndelegateResponse message. Also converts values to other types if specified.
         * @param m MsgUndelegateResponse
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.staking.v1beta1.MsgUndelegateResponse,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgUndelegateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }

  /** Namespace gov. */
  namespace gov {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** VoteOption enum. */
      enum VoteOption {
        VOTE_OPTION_UNSPECIFIED = 0,
        VOTE_OPTION_YES = 1,
        VOTE_OPTION_ABSTAIN = 2,
        VOTE_OPTION_NO = 3,
        VOTE_OPTION_NO_WITH_VETO = 4
      }

      /** Represents a Msg */
      class Msg extends $protobuf.rpc.Service {
        /**
         * Constructs a new Msg service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean
        );

        /**
         * Creates new Msg service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean
        ): Msg;

        /**
         * Calls Vote.
         * @param request MsgVote message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgVoteResponse
         */
        public vote(
          request: cosmos.gov.v1beta1.IMsgVote,
          callback: cosmos.gov.v1beta1.Msg.VoteCallback
        ): void;

        /**
         * Calls Vote.
         * @param request MsgVote message or plain object
         * @returns Promise
         */
        public vote(
          request: cosmos.gov.v1beta1.IMsgVote
        ): Promise<cosmos.gov.v1beta1.MsgVoteResponse>;

        /**
         * Calls Deposit.
         * @param request MsgDeposit message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgDepositResponse
         */
        public deposit(
          request: cosmos.gov.v1beta1.IMsgDeposit,
          callback: cosmos.gov.v1beta1.Msg.DepositCallback
        ): void;

        /**
         * Calls Deposit.
         * @param request MsgDeposit message or plain object
         * @returns Promise
         */
        public deposit(
          request: cosmos.gov.v1beta1.IMsgDeposit
        ): Promise<cosmos.gov.v1beta1.MsgDepositResponse>;
      }

      namespace Msg {
        /**
         * Callback as used by {@link cosmos.gov.v1beta1.Msg#vote}.
         * @param error Error, if any
         * @param [response] MsgVoteResponse
         */
        type VoteCallback = (
          error: Error | null,
          response?: cosmos.gov.v1beta1.MsgVoteResponse
        ) => void;

        /**
         * Callback as used by {@link cosmos.gov.v1beta1.Msg#deposit}.
         * @param error Error, if any
         * @param [response] MsgDepositResponse
         */
        type DepositCallback = (
          error: Error | null,
          response?: cosmos.gov.v1beta1.MsgDepositResponse
        ) => void;
      }

      /** Properties of a MsgVote. */
      interface IMsgVote {
        /** MsgVote proposalId */
        proposalId?: Long | null;

        /** MsgVote voter */
        voter?: string | null;

        /** MsgVote option */
        option?: cosmos.gov.v1beta1.VoteOption | null;
      }

      /** Represents a MsgVote. */
      class MsgVote implements IMsgVote {
        /**
         * Constructs a new MsgVote.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgVote);

        /** MsgVote proposalId. */
        public proposalId: Long;

        /** MsgVote voter. */
        public voter: string;

        /** MsgVote option. */
        public option: cosmos.gov.v1beta1.VoteOption;

        /**
         * Creates a new MsgVote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgVote instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgVote
        ): cosmos.gov.v1beta1.MsgVote;

        /**
         * Encodes the specified MsgVote message. Does not implicitly {@link cosmos.gov.v1beta1.MsgVote.verify|verify} messages.
         * @param m MsgVote message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgVote,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgVote message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.MsgVote;

        /**
         * Creates a MsgVote message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgVote
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.MsgVote;

        /**
         * Creates a plain object from a MsgVote message. Also converts values to other types if specified.
         * @param m MsgVote
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.MsgVote,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgVote to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgVoteResponse. */
      interface IMsgVoteResponse {}

      /** Represents a MsgVoteResponse. */
      class MsgVoteResponse implements IMsgVoteResponse {
        /**
         * Constructs a new MsgVoteResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgVoteResponse);

        /**
         * Creates a new MsgVoteResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgVoteResponse instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgVoteResponse
        ): cosmos.gov.v1beta1.MsgVoteResponse;

        /**
         * Encodes the specified MsgVoteResponse message. Does not implicitly {@link cosmos.gov.v1beta1.MsgVoteResponse.verify|verify} messages.
         * @param m MsgVoteResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgVoteResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgVoteResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgVoteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.MsgVoteResponse;

        /**
         * Creates a MsgVoteResponse message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgVoteResponse
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.MsgVoteResponse;

        /**
         * Creates a plain object from a MsgVoteResponse message. Also converts values to other types if specified.
         * @param m MsgVoteResponse
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.MsgVoteResponse,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgVoteResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgDeposit. */
      interface IMsgDeposit {
        /** MsgDeposit proposalId */
        proposalId?: Long | null;

        /** MsgDeposit depositor */
        depositor?: string | null;

        /** MsgDeposit amount */
        amount?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a MsgDeposit. */
      class MsgDeposit implements IMsgDeposit {
        /**
         * Constructs a new MsgDeposit.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgDeposit);

        /** MsgDeposit proposalId. */
        public proposalId: Long;

        /** MsgDeposit depositor. */
        public depositor: string;

        /** MsgDeposit amount. */
        public amount: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new MsgDeposit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDeposit instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgDeposit
        ): cosmos.gov.v1beta1.MsgDeposit;

        /**
         * Encodes the specified MsgDeposit message. Does not implicitly {@link cosmos.gov.v1beta1.MsgDeposit.verify|verify} messages.
         * @param m MsgDeposit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgDeposit,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgDeposit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.MsgDeposit;

        /**
         * Creates a MsgDeposit message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgDeposit
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.MsgDeposit;

        /**
         * Creates a plain object from a MsgDeposit message. Also converts values to other types if specified.
         * @param m MsgDeposit
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.MsgDeposit,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgDeposit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgDepositResponse. */
      interface IMsgDepositResponse {}

      /** Represents a MsgDepositResponse. */
      class MsgDepositResponse implements IMsgDepositResponse {
        /**
         * Constructs a new MsgDepositResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.gov.v1beta1.IMsgDepositResponse);

        /**
         * Creates a new MsgDepositResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgDepositResponse instance
         */
        public static create(
          properties?: cosmos.gov.v1beta1.IMsgDepositResponse
        ): cosmos.gov.v1beta1.MsgDepositResponse;

        /**
         * Encodes the specified MsgDepositResponse message. Does not implicitly {@link cosmos.gov.v1beta1.MsgDepositResponse.verify|verify} messages.
         * @param m MsgDepositResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.gov.v1beta1.IMsgDepositResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgDepositResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgDepositResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.gov.v1beta1.MsgDepositResponse;

        /**
         * Creates a MsgDepositResponse message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgDepositResponse
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.gov.v1beta1.MsgDepositResponse;

        /**
         * Creates a plain object from a MsgDepositResponse message. Also converts values to other types if specified.
         * @param m MsgDepositResponse
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.gov.v1beta1.MsgDepositResponse,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgDepositResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }

  /** Namespace distribution. */
  namespace distribution {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Represents a Msg */
      class Msg extends $protobuf.rpc.Service {
        /**
         * Constructs a new Msg service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean
        );

        /**
         * Creates new Msg service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(
          rpcImpl: $protobuf.RPCImpl,
          requestDelimited?: boolean,
          responseDelimited?: boolean
        ): Msg;

        /**
         * Calls WithdrawDelegatorReward.
         * @param request MsgWithdrawDelegatorReward message or plain object
         * @param callback Node-style callback called with the error, if any, and MsgWithdrawDelegatorRewardResponse
         */
        public withdrawDelegatorReward(
          request: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorReward,
          callback: cosmos.distribution.v1beta1.Msg.WithdrawDelegatorRewardCallback
        ): void;

        /**
         * Calls WithdrawDelegatorReward.
         * @param request MsgWithdrawDelegatorReward message or plain object
         * @returns Promise
         */
        public withdrawDelegatorReward(
          request: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorReward
        ): Promise<cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse>;
      }

      namespace Msg {
        /**
         * Callback as used by {@link cosmos.distribution.v1beta1.Msg#withdrawDelegatorReward}.
         * @param error Error, if any
         * @param [response] MsgWithdrawDelegatorRewardResponse
         */
        type WithdrawDelegatorRewardCallback = (
          error: Error | null,
          response?: cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse
        ) => void;
      }

      /** Properties of a MsgWithdrawDelegatorReward. */
      interface IMsgWithdrawDelegatorReward {
        /** MsgWithdrawDelegatorReward delegatorAddress */
        delegatorAddress?: string | null;

        /** MsgWithdrawDelegatorReward validatorAddress */
        validatorAddress?: string | null;
      }

      /** Represents a MsgWithdrawDelegatorReward. */
      class MsgWithdrawDelegatorReward implements IMsgWithdrawDelegatorReward {
        /**
         * Constructs a new MsgWithdrawDelegatorReward.
         * @param [p] Properties to set
         */
        constructor(
          p?: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorReward
        );

        /** MsgWithdrawDelegatorReward delegatorAddress. */
        public delegatorAddress: string;

        /** MsgWithdrawDelegatorReward validatorAddress. */
        public validatorAddress: string;

        /**
         * Creates a new MsgWithdrawDelegatorReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgWithdrawDelegatorReward instance
         */
        public static create(
          properties?: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorReward
        ): cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward;

        /**
         * Encodes the specified MsgWithdrawDelegatorReward message. Does not implicitly {@link cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward.verify|verify} messages.
         * @param m MsgWithdrawDelegatorReward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorReward,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgWithdrawDelegatorReward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgWithdrawDelegatorReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward;

        /**
         * Creates a MsgWithdrawDelegatorReward message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgWithdrawDelegatorReward
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward;

        /**
         * Creates a plain object from a MsgWithdrawDelegatorReward message. Also converts values to other types if specified.
         * @param m MsgWithdrawDelegatorReward
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgWithdrawDelegatorReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgWithdrawDelegatorRewardResponse. */
      interface IMsgWithdrawDelegatorRewardResponse {}

      /** Represents a MsgWithdrawDelegatorRewardResponse. */
      class MsgWithdrawDelegatorRewardResponse
        implements IMsgWithdrawDelegatorRewardResponse {
        /**
         * Constructs a new MsgWithdrawDelegatorRewardResponse.
         * @param [p] Properties to set
         */
        constructor(
          p?: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorRewardResponse
        );

        /**
         * Creates a new MsgWithdrawDelegatorRewardResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgWithdrawDelegatorRewardResponse instance
         */
        public static create(
          properties?: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorRewardResponse
        ): cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse;

        /**
         * Encodes the specified MsgWithdrawDelegatorRewardResponse message. Does not implicitly {@link cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse.verify|verify} messages.
         * @param m MsgWithdrawDelegatorRewardResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.distribution.v1beta1.IMsgWithdrawDelegatorRewardResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgWithdrawDelegatorRewardResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgWithdrawDelegatorRewardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse;

        /**
         * Creates a MsgWithdrawDelegatorRewardResponse message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgWithdrawDelegatorRewardResponse
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse;

        /**
         * Creates a plain object from a MsgWithdrawDelegatorRewardResponse message. Also converts values to other types if specified.
         * @param m MsgWithdrawDelegatorRewardResponse
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgWithdrawDelegatorRewardResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }

  /** Namespace base. */
  namespace base {
    namespace query {
      /** Namespace v1beta1. */
      namespace v1beta1 {
        /** Properties of a PageRequest. */
        interface IPageRequest {
          /** PageRequest key */
          key?: Uint8Array | null;

          /** PageRequest offset */
          offset?: Long | null;

          /** PageRequest limit */
          limit?: Long | null;

          /** PageRequest count_total */
          count_total?: boolean | null;
        }

        /** Represents a PageRequest. */
        class PageRequest implements IPageRequest {
          /**
           * Constructs a new PageRequest.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.query.v1beta1.IPageRequest);

          /** PageRequest key. */
          public key: Uint8Array;

          /** PageRequest offset. */
          public offset: Long;

          /** PageRequest limit. */
          public limit: Long;

          /** PageRequest count_total. */
          public count_total: boolean;

          /**
           * Encodes the specified PageRequest message. Does not implicitly {@link cosmos.base.query.v1beta1.PageRequest.verify|verify} messages.
           * @param m PageRequest message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.query.v1beta1.IPageRequest,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a PageRequest message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns PageRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): cosmos.base.query.v1beta1.PageRequest;
        }

        /** Properties of a PageResponse. */
        interface IPageResponse {
          /** PageResponse next_key */
          next_key?: Uint8Array | null;

          /** PageResponse total */
          total?: Long | null;
        }

        /** Represents a PageResponse. */
        class PageResponse implements IPageResponse {
          /**
           * Constructs a new PageResponse.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.query.v1beta1.IPageResponse);

          /** PageResponse next_key. */
          public next_key: Uint8Array;

          /** PageResponse total. */
          public total: Long;

          /**
           * Encodes the specified PageResponse message. Does not implicitly {@link cosmos.base.query.v1beta1.PageResponse.verify|verify} messages.
           * @param m PageResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.query.v1beta1.IPageResponse,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a PageResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns PageResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): cosmos.base.query.v1beta1.PageResponse;
        }
      }
    }

    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a Coin. */
      interface ICoin {
        /** Coin denom */
        denom?: string | null;

        /** Coin amount */
        amount?: string | null;
      }

      /** Represents a Coin. */
      class Coin implements ICoin {
        /**
         * Constructs a new Coin.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.ICoin);

        /** Coin denom. */
        public denom: string;

        /** Coin amount. */
        public amount: string;

        /**
         * Creates a new Coin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Coin instance
         */
        public static create(
          properties?: cosmos.base.v1beta1.ICoin
        ): cosmos.base.v1beta1.Coin;

        /**
         * Encodes the specified Coin message. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
         * @param m Coin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.base.v1beta1.ICoin,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Coin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Coin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.base.v1beta1.Coin;

        /**
         * Creates a Coin message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Coin
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.base.v1beta1.Coin;

        /**
         * Creates a plain object from a Coin message. Also converts values to other types if specified.
         * @param m Coin
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.base.v1beta1.Coin,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Coin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DecCoin. */
      interface IDecCoin {
        /** DecCoin denom */
        denom?: string | null;

        /** DecCoin amount */
        amount?: string | null;
      }

      /** Represents a DecCoin. */
      class DecCoin implements IDecCoin {
        /**
         * Constructs a new DecCoin.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.IDecCoin);

        /** DecCoin denom. */
        public denom: string;

        /** DecCoin amount. */
        public amount: string;

        /**
         * Creates a new DecCoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecCoin instance
         */
        public static create(
          properties?: cosmos.base.v1beta1.IDecCoin
        ): cosmos.base.v1beta1.DecCoin;

        /**
         * Encodes the specified DecCoin message. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
         * @param m DecCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.base.v1beta1.IDecCoin,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DecCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DecCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.base.v1beta1.DecCoin;

        /**
         * Creates a DecCoin message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns DecCoin
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.base.v1beta1.DecCoin;

        /**
         * Creates a plain object from a DecCoin message. Also converts values to other types if specified.
         * @param m DecCoin
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.base.v1beta1.DecCoin,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DecCoin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an IntProto. */
      interface IIntProto {
        /** IntProto int */
        int?: string | null;
      }

      /** Represents an IntProto. */
      class IntProto implements IIntProto {
        /**
         * Constructs a new IntProto.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.IIntProto);

        /** IntProto int. */
        public int: string;

        /**
         * Creates a new IntProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntProto instance
         */
        public static create(
          properties?: cosmos.base.v1beta1.IIntProto
        ): cosmos.base.v1beta1.IntProto;

        /**
         * Encodes the specified IntProto message. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
         * @param m IntProto message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.base.v1beta1.IIntProto,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an IntProto message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns IntProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.base.v1beta1.IntProto;

        /**
         * Creates an IntProto message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns IntProto
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.base.v1beta1.IntProto;

        /**
         * Creates a plain object from an IntProto message. Also converts values to other types if specified.
         * @param m IntProto
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.base.v1beta1.IntProto,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this IntProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a DecProto. */
      interface IDecProto {
        /** DecProto dec */
        dec?: string | null;
      }

      /** Represents a DecProto. */
      class DecProto implements IDecProto {
        /**
         * Constructs a new DecProto.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.base.v1beta1.IDecProto);

        /** DecProto dec. */
        public dec: string;

        /**
         * Creates a new DecProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DecProto instance
         */
        public static create(
          properties?: cosmos.base.v1beta1.IDecProto
        ): cosmos.base.v1beta1.DecProto;

        /**
         * Encodes the specified DecProto message. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
         * @param m DecProto message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.base.v1beta1.IDecProto,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a DecProto message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DecProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.base.v1beta1.DecProto;

        /**
         * Creates a DecProto message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns DecProto
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.base.v1beta1.DecProto;

        /**
         * Creates a plain object from a DecProto message. Also converts values to other types if specified.
         * @param m DecProto
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.base.v1beta1.DecProto,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this DecProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }

    /** Namespace abci. */
    namespace abci {
      /** Namespace v1beta1. */
      namespace v1beta1 {
        /** Properties of a MsgData. */
        interface IMsgData {
          /** MsgData msgType */
          msgType?: string | null;

          /** MsgData data */
          data?: Uint8Array | null;
        }

        /** Represents a MsgData. */
        class MsgData implements IMsgData {
          /**
           * Constructs a new MsgData.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.abci.v1beta1.IMsgData);

          /** MsgData msgType. */
          public msgType: string;

          /** MsgData data. */
          public data: Uint8Array;

          /**
           * Creates a new MsgData instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MsgData instance
           */
          public static create(
            properties?: cosmos.base.abci.v1beta1.IMsgData
          ): cosmos.base.abci.v1beta1.MsgData;

          /**
           * Encodes the specified MsgData message. Does not implicitly {@link cosmos.base.abci.v1beta1.MsgData.verify|verify} messages.
           * @param m MsgData message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.abci.v1beta1.IMsgData,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a MsgData message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns MsgData
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): cosmos.base.abci.v1beta1.MsgData;

          /**
           * Creates a MsgData message from a plain object. Also converts values to their respective internal types.
           * @param d Plain object
           * @returns MsgData
           */
          public static fromObject(d: {
            [k: string]: any;
          }): cosmos.base.abci.v1beta1.MsgData;

          /**
           * Creates a plain object from a MsgData message. Also converts values to other types if specified.
           * @param m MsgData
           * @param [o] Conversion options
           * @returns Plain object
           */
          public static toObject(
            m: cosmos.base.abci.v1beta1.MsgData,
            o?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this MsgData to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a TxMsgData. */
        interface ITxMsgData {
          /** TxMsgData data */
          data?: cosmos.base.abci.v1beta1.IMsgData[] | null;
        }

        /** Represents a TxMsgData. */
        class TxMsgData implements ITxMsgData {
          /**
           * Constructs a new TxMsgData.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.base.abci.v1beta1.ITxMsgData);

          /** TxMsgData data. */
          public data: cosmos.base.abci.v1beta1.IMsgData[];

          /**
           * Creates a new TxMsgData instance using the specified properties.
           * @param [properties] Properties to set
           * @returns TxMsgData instance
           */
          public static create(
            properties?: cosmos.base.abci.v1beta1.ITxMsgData
          ): cosmos.base.abci.v1beta1.TxMsgData;

          /**
           * Encodes the specified TxMsgData message. Does not implicitly {@link cosmos.base.abci.v1beta1.TxMsgData.verify|verify} messages.
           * @param m TxMsgData message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.base.abci.v1beta1.ITxMsgData,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a TxMsgData message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns TxMsgData
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): cosmos.base.abci.v1beta1.TxMsgData;

          /**
           * Creates a TxMsgData message from a plain object. Also converts values to their respective internal types.
           * @param d Plain object
           * @returns TxMsgData
           */
          public static fromObject(d: {
            [k: string]: any;
          }): cosmos.base.abci.v1beta1.TxMsgData;

          /**
           * Creates a plain object from a TxMsgData message. Also converts values to other types if specified.
           * @param m TxMsgData
           * @param [o] Conversion options
           * @returns Plain object
           */
          public static toObject(
            m: cosmos.base.abci.v1beta1.TxMsgData,
            o?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this TxMsgData to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }
    }
  }

  /** Namespace crypto. */
  namespace crypto {
    /** Namespace multisig. */
    namespace multisig {
      /** Namespace v1beta1. */
      namespace v1beta1 {
        /** Properties of a MultiSignature. */
        interface IMultiSignature {
          /** MultiSignature signatures */
          signatures?: Uint8Array[] | null;
        }

        /** Represents a MultiSignature. */
        class MultiSignature implements IMultiSignature {
          /**
           * Constructs a new MultiSignature.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.crypto.multisig.v1beta1.IMultiSignature);

          /** MultiSignature signatures. */
          public signatures: Uint8Array[];

          /**
           * Creates a new MultiSignature instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MultiSignature instance
           */
          public static create(
            properties?: cosmos.crypto.multisig.v1beta1.IMultiSignature
          ): cosmos.crypto.multisig.v1beta1.MultiSignature;

          /**
           * Encodes the specified MultiSignature message. Does not implicitly {@link cosmos.crypto.multisig.v1beta1.MultiSignature.verify|verify} messages.
           * @param m MultiSignature message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.crypto.multisig.v1beta1.IMultiSignature,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a MultiSignature message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns MultiSignature
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): cosmos.crypto.multisig.v1beta1.MultiSignature;

          /**
           * Creates a MultiSignature message from a plain object. Also converts values to their respective internal types.
           * @param d Plain object
           * @returns MultiSignature
           */
          public static fromObject(d: {
            [k: string]: any;
          }): cosmos.crypto.multisig.v1beta1.MultiSignature;

          /**
           * Creates a plain object from a MultiSignature message. Also converts values to other types if specified.
           * @param m MultiSignature
           * @param [o] Conversion options
           * @returns Plain object
           */
          public static toObject(
            m: cosmos.crypto.multisig.v1beta1.MultiSignature,
            o?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this MultiSignature to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a CompactBitArray. */
        interface ICompactBitArray {
          /** CompactBitArray extraBitsStored */
          extraBitsStored?: number | null;

          /** CompactBitArray elems */
          elems?: Uint8Array | null;
        }

        /** Represents a CompactBitArray. */
        class CompactBitArray implements ICompactBitArray {
          /**
           * Constructs a new CompactBitArray.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.crypto.multisig.v1beta1.ICompactBitArray);

          /** CompactBitArray extraBitsStored. */
          public extraBitsStored: number;

          /** CompactBitArray elems. */
          public elems: Uint8Array;

          /**
           * Creates a new CompactBitArray instance using the specified properties.
           * @param [properties] Properties to set
           * @returns CompactBitArray instance
           */
          public static create(
            properties?: cosmos.crypto.multisig.v1beta1.ICompactBitArray
          ): cosmos.crypto.multisig.v1beta1.CompactBitArray;

          /**
           * Encodes the specified CompactBitArray message. Does not implicitly {@link cosmos.crypto.multisig.v1beta1.CompactBitArray.verify|verify} messages.
           * @param m CompactBitArray message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.crypto.multisig.v1beta1.ICompactBitArray,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a CompactBitArray message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns CompactBitArray
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): cosmos.crypto.multisig.v1beta1.CompactBitArray;

          /**
           * Creates a CompactBitArray message from a plain object. Also converts values to their respective internal types.
           * @param d Plain object
           * @returns CompactBitArray
           */
          public static fromObject(d: {
            [k: string]: any;
          }): cosmos.crypto.multisig.v1beta1.CompactBitArray;

          /**
           * Creates a plain object from a CompactBitArray message. Also converts values to other types if specified.
           * @param m CompactBitArray
           * @param [o] Conversion options
           * @returns Plain object
           */
          public static toObject(
            m: cosmos.crypto.multisig.v1beta1.CompactBitArray,
            o?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this CompactBitArray to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }
    }

    /** Namespace secp256k1. */
    namespace secp256k1 {
      /** Properties of a PubKey. */
      interface IPubKey {
        /** PubKey key */
        key?: Uint8Array | null;
      }

      /** Represents a PubKey. */
      class PubKey implements IPubKey {
        /**
         * Constructs a new PubKey.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.crypto.secp256k1.IPubKey);

        /** PubKey key. */
        public key: Uint8Array;

        /**
         * Creates a new PubKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PubKey instance
         */
        public static create(
          properties?: cosmos.crypto.secp256k1.IPubKey
        ): cosmos.crypto.secp256k1.PubKey;

        /**
         * Encodes the specified PubKey message. Does not implicitly {@link cosmos.crypto.secp256k1.PubKey.verify|verify} messages.
         * @param m PubKey message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.crypto.secp256k1.IPubKey,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a PubKey message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PubKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.crypto.secp256k1.PubKey;

        /**
         * Creates a PubKey message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns PubKey
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.crypto.secp256k1.PubKey;

        /**
         * Creates a plain object from a PubKey message. Also converts values to other types if specified.
         * @param m PubKey
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.crypto.secp256k1.PubKey,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this PubKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a PrivKey. */
      interface IPrivKey {
        /** PrivKey key */
        key?: Uint8Array | null;
      }

      /** Represents a PrivKey. */
      class PrivKey implements IPrivKey {
        /**
         * Constructs a new PrivKey.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.crypto.secp256k1.IPrivKey);

        /** PrivKey key. */
        public key: Uint8Array;

        /**
         * Creates a new PrivKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivKey instance
         */
        public static create(
          properties?: cosmos.crypto.secp256k1.IPrivKey
        ): cosmos.crypto.secp256k1.PrivKey;

        /**
         * Encodes the specified PrivKey message. Does not implicitly {@link cosmos.crypto.secp256k1.PrivKey.verify|verify} messages.
         * @param m PrivKey message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.crypto.secp256k1.IPrivKey,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a PrivKey message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PrivKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.crypto.secp256k1.PrivKey;

        /**
         * Creates a PrivKey message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns PrivKey
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.crypto.secp256k1.PrivKey;

        /**
         * Creates a plain object from a PrivKey message. Also converts values to other types if specified.
         * @param m PrivKey
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.crypto.secp256k1.PrivKey,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this PrivKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }

  /** Namespace tx. */
  namespace tx {
    /** Namespace v1beta1. */
    namespace v1beta1 {
      /** Properties of a Tx. */
      interface ITx {
        /** Tx body */
        body?: cosmos.tx.v1beta1.ITxBody | null;

        /** Tx authInfo */
        authInfo?: cosmos.tx.v1beta1.IAuthInfo | null;

        /** Tx signatures */
        signatures?: Uint8Array[] | null;
      }

      /** Represents a Tx. */
      class Tx implements ITx {
        /**
         * Constructs a new Tx.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ITx);

        /** Tx body. */
        public body?: cosmos.tx.v1beta1.ITxBody | null;

        /** Tx authInfo. */
        public authInfo?: cosmos.tx.v1beta1.IAuthInfo | null;

        /** Tx signatures. */
        public signatures: Uint8Array[];

        /**
         * Creates a new Tx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Tx instance
         */
        public static create(
          properties?: cosmos.tx.v1beta1.ITx
        ): cosmos.tx.v1beta1.Tx;

        /**
         * Encodes the specified Tx message. Does not implicitly {@link cosmos.tx.v1beta1.Tx.verify|verify} messages.
         * @param m Tx message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.tx.v1beta1.ITx,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Tx message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Tx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.tx.v1beta1.Tx;

        /**
         * Creates a Tx message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Tx
         */
        public static fromObject(d: { [k: string]: any }): cosmos.tx.v1beta1.Tx;

        /**
         * Creates a plain object from a Tx message. Also converts values to other types if specified.
         * @param m Tx
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.tx.v1beta1.Tx,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Tx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a TxRaw. */
      interface ITxRaw {
        /** TxRaw bodyBytes */
        bodyBytes?: Uint8Array | null;

        /** TxRaw authInfoBytes */
        authInfoBytes?: Uint8Array | null;

        /** TxRaw signatures */
        signatures?: Uint8Array[] | null;
      }

      /** Represents a TxRaw. */
      class TxRaw implements ITxRaw {
        /**
         * Constructs a new TxRaw.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ITxRaw);

        /** TxRaw bodyBytes. */
        public bodyBytes: Uint8Array;

        /** TxRaw authInfoBytes. */
        public authInfoBytes: Uint8Array;

        /** TxRaw signatures. */
        public signatures: Uint8Array[];

        /**
         * Creates a new TxRaw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TxRaw instance
         */
        public static create(
          properties?: cosmos.tx.v1beta1.ITxRaw
        ): cosmos.tx.v1beta1.TxRaw;

        /**
         * Encodes the specified TxRaw message. Does not implicitly {@link cosmos.tx.v1beta1.TxRaw.verify|verify} messages.
         * @param m TxRaw message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.tx.v1beta1.ITxRaw,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a TxRaw message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TxRaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.tx.v1beta1.TxRaw;

        /**
         * Creates a TxRaw message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns TxRaw
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.tx.v1beta1.TxRaw;

        /**
         * Creates a plain object from a TxRaw message. Also converts values to other types if specified.
         * @param m TxRaw
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.tx.v1beta1.TxRaw,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this TxRaw to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a SignDoc. */
      interface ISignDoc {
        /** SignDoc bodyBytes */
        bodyBytes?: Uint8Array | null;

        /** SignDoc authInfoBytes */
        authInfoBytes?: Uint8Array | null;

        /** SignDoc chainId */
        chainId?: string | null;

        /** SignDoc accountNumber */
        accountNumber?: Long | null;
      }

      /** Represents a SignDoc. */
      class SignDoc implements ISignDoc {
        /**
         * Constructs a new SignDoc.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ISignDoc);

        /** SignDoc bodyBytes. */
        public bodyBytes: Uint8Array;

        /** SignDoc authInfoBytes. */
        public authInfoBytes: Uint8Array;

        /** SignDoc chainId. */
        public chainId: string;

        /** SignDoc accountNumber. */
        public accountNumber: Long;

        /**
         * Creates a new SignDoc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignDoc instance
         */
        public static create(
          properties?: cosmos.tx.v1beta1.ISignDoc
        ): cosmos.tx.v1beta1.SignDoc;

        /**
         * Encodes the specified SignDoc message. Does not implicitly {@link cosmos.tx.v1beta1.SignDoc.verify|verify} messages.
         * @param m SignDoc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.tx.v1beta1.ISignDoc,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SignDoc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SignDoc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.tx.v1beta1.SignDoc;

        /**
         * Creates a SignDoc message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns SignDoc
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.tx.v1beta1.SignDoc;

        /**
         * Creates a plain object from a SignDoc message. Also converts values to other types if specified.
         * @param m SignDoc
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.tx.v1beta1.SignDoc,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SignDoc to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a TxBody. */
      interface ITxBody {
        /** TxBody messages */
        messages?: google.protobuf.IAny[] | null;

        /** TxBody memo */
        memo?: string | null;

        /** TxBody timeoutHeight */
        timeoutHeight?: Long | null;

        /** TxBody extensionOptions */
        extensionOptions?: google.protobuf.IAny[] | null;

        /** TxBody nonCriticalExtensionOptions */
        nonCriticalExtensionOptions?: google.protobuf.IAny[] | null;
      }

      /** Represents a TxBody. */
      class TxBody implements ITxBody {
        /**
         * Constructs a new TxBody.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ITxBody);

        /** TxBody messages. */
        public messages: google.protobuf.IAny[];

        /** TxBody memo. */
        public memo: string;

        /** TxBody timeoutHeight. */
        public timeoutHeight: Long;

        /** TxBody extensionOptions. */
        public extensionOptions: google.protobuf.IAny[];

        /** TxBody nonCriticalExtensionOptions. */
        public nonCriticalExtensionOptions: google.protobuf.IAny[];

        /**
         * Creates a new TxBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TxBody instance
         */
        public static create(
          properties?: cosmos.tx.v1beta1.ITxBody
        ): cosmos.tx.v1beta1.TxBody;

        /**
         * Encodes the specified TxBody message. Does not implicitly {@link cosmos.tx.v1beta1.TxBody.verify|verify} messages.
         * @param m TxBody message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.tx.v1beta1.ITxBody,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a TxBody message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TxBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.tx.v1beta1.TxBody;

        /**
         * Creates a TxBody message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns TxBody
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.tx.v1beta1.TxBody;

        /**
         * Creates a plain object from a TxBody message. Also converts values to other types if specified.
         * @param m TxBody
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.tx.v1beta1.TxBody,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this TxBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of an AuthInfo. */
      interface IAuthInfo {
        /** AuthInfo signerInfos */
        signerInfos?: cosmos.tx.v1beta1.ISignerInfo[] | null;

        /** AuthInfo fee */
        fee?: cosmos.tx.v1beta1.IFee | null;
      }

      /** Represents an AuthInfo. */
      class AuthInfo implements IAuthInfo {
        /**
         * Constructs a new AuthInfo.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.IAuthInfo);

        /** AuthInfo signerInfos. */
        public signerInfos: cosmos.tx.v1beta1.ISignerInfo[];

        /** AuthInfo fee. */
        public fee?: cosmos.tx.v1beta1.IFee | null;

        /**
         * Creates a new AuthInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthInfo instance
         */
        public static create(
          properties?: cosmos.tx.v1beta1.IAuthInfo
        ): cosmos.tx.v1beta1.AuthInfo;

        /**
         * Encodes the specified AuthInfo message. Does not implicitly {@link cosmos.tx.v1beta1.AuthInfo.verify|verify} messages.
         * @param m AuthInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.tx.v1beta1.IAuthInfo,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AuthInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AuthInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.tx.v1beta1.AuthInfo;

        /**
         * Creates an AuthInfo message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns AuthInfo
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.tx.v1beta1.AuthInfo;

        /**
         * Creates a plain object from an AuthInfo message. Also converts values to other types if specified.
         * @param m AuthInfo
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.tx.v1beta1.AuthInfo,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this AuthInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a SignerInfo. */
      interface ISignerInfo {
        /** SignerInfo publicKey */
        publicKey?: google.protobuf.IAny | null;

        /** SignerInfo modeInfo */
        modeInfo?: cosmos.tx.v1beta1.IModeInfo | null;

        /** SignerInfo sequence */
        sequence?: Long | null;
      }

      /** Represents a SignerInfo. */
      class SignerInfo implements ISignerInfo {
        /**
         * Constructs a new SignerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.ISignerInfo);

        /** SignerInfo publicKey. */
        public publicKey?: google.protobuf.IAny | null;

        /** SignerInfo modeInfo. */
        public modeInfo?: cosmos.tx.v1beta1.IModeInfo | null;

        /** SignerInfo sequence. */
        public sequence: Long;

        /**
         * Creates a new SignerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignerInfo instance
         */
        public static create(
          properties?: cosmos.tx.v1beta1.ISignerInfo
        ): cosmos.tx.v1beta1.SignerInfo;

        /**
         * Encodes the specified SignerInfo message. Does not implicitly {@link cosmos.tx.v1beta1.SignerInfo.verify|verify} messages.
         * @param m SignerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.tx.v1beta1.ISignerInfo,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a SignerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SignerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.tx.v1beta1.SignerInfo;

        /**
         * Creates a SignerInfo message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns SignerInfo
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.tx.v1beta1.SignerInfo;

        /**
         * Creates a plain object from a SignerInfo message. Also converts values to other types if specified.
         * @param m SignerInfo
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.tx.v1beta1.SignerInfo,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this SignerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a ModeInfo. */
      interface IModeInfo {
        /** ModeInfo single */
        single?: cosmos.tx.v1beta1.ModeInfo.ISingle | null;

        /** ModeInfo multi */
        multi?: cosmos.tx.v1beta1.ModeInfo.IMulti | null;
      }

      /** Represents a ModeInfo. */
      class ModeInfo implements IModeInfo {
        /**
         * Constructs a new ModeInfo.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.IModeInfo);

        /** ModeInfo single. */
        public single?: cosmos.tx.v1beta1.ModeInfo.ISingle | null;

        /** ModeInfo multi. */
        public multi?: cosmos.tx.v1beta1.ModeInfo.IMulti | null;

        /** ModeInfo sum. */
        public sum?: 'single' | 'multi';

        /**
         * Creates a new ModeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModeInfo instance
         */
        public static create(
          properties?: cosmos.tx.v1beta1.IModeInfo
        ): cosmos.tx.v1beta1.ModeInfo;

        /**
         * Encodes the specified ModeInfo message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.verify|verify} messages.
         * @param m ModeInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.tx.v1beta1.IModeInfo,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ModeInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ModeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.tx.v1beta1.ModeInfo;

        /**
         * Creates a ModeInfo message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns ModeInfo
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.tx.v1beta1.ModeInfo;

        /**
         * Creates a plain object from a ModeInfo message. Also converts values to other types if specified.
         * @param m ModeInfo
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.tx.v1beta1.ModeInfo,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ModeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      namespace ModeInfo {
        /** Properties of a Single. */
        interface ISingle {
          /** Single mode */
          mode?: cosmos.tx.signing.v1beta1.SignMode | null;
        }

        /** Represents a Single. */
        class Single implements ISingle {
          /**
           * Constructs a new Single.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.tx.v1beta1.ModeInfo.ISingle);

          /** Single mode. */
          public mode: cosmos.tx.signing.v1beta1.SignMode;

          /**
           * Creates a new Single instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Single instance
           */
          public static create(
            properties?: cosmos.tx.v1beta1.ModeInfo.ISingle
          ): cosmos.tx.v1beta1.ModeInfo.Single;

          /**
           * Encodes the specified Single message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.Single.verify|verify} messages.
           * @param m Single message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.tx.v1beta1.ModeInfo.ISingle,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a Single message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Single
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): cosmos.tx.v1beta1.ModeInfo.Single;

          /**
           * Creates a Single message from a plain object. Also converts values to their respective internal types.
           * @param d Plain object
           * @returns Single
           */
          public static fromObject(d: {
            [k: string]: any;
          }): cosmos.tx.v1beta1.ModeInfo.Single;

          /**
           * Creates a plain object from a Single message. Also converts values to other types if specified.
           * @param m Single
           * @param [o] Conversion options
           * @returns Plain object
           */
          public static toObject(
            m: cosmos.tx.v1beta1.ModeInfo.Single,
            o?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this Single to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a Multi. */
        interface IMulti {
          /** Multi bitarray */
          bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

          /** Multi modeInfos */
          modeInfos?: cosmos.tx.v1beta1.IModeInfo[] | null;
        }

        /** Represents a Multi. */
        class Multi implements IMulti {
          /**
           * Constructs a new Multi.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.tx.v1beta1.ModeInfo.IMulti);

          /** Multi bitarray. */
          public bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

          /** Multi modeInfos. */
          public modeInfos: cosmos.tx.v1beta1.IModeInfo[];

          /**
           * Creates a new Multi instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Multi instance
           */
          public static create(
            properties?: cosmos.tx.v1beta1.ModeInfo.IMulti
          ): cosmos.tx.v1beta1.ModeInfo.Multi;

          /**
           * Encodes the specified Multi message. Does not implicitly {@link cosmos.tx.v1beta1.ModeInfo.Multi.verify|verify} messages.
           * @param m Multi message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.tx.v1beta1.ModeInfo.IMulti,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a Multi message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Multi
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): cosmos.tx.v1beta1.ModeInfo.Multi;

          /**
           * Creates a Multi message from a plain object. Also converts values to their respective internal types.
           * @param d Plain object
           * @returns Multi
           */
          public static fromObject(d: {
            [k: string]: any;
          }): cosmos.tx.v1beta1.ModeInfo.Multi;

          /**
           * Creates a plain object from a Multi message. Also converts values to other types if specified.
           * @param m Multi
           * @param [o] Conversion options
           * @returns Plain object
           */
          public static toObject(
            m: cosmos.tx.v1beta1.ModeInfo.Multi,
            o?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this Multi to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }

      /** Properties of a Fee. */
      interface IFee {
        /** Fee amount */
        amount?: cosmos.base.v1beta1.ICoin[] | null;

        /** Fee gasLimit */
        gasLimit?: Long | null;

        /** Fee payer */
        payer?: string | null;

        /** Fee granter */
        granter?: string | null;
      }

      /** Represents a Fee. */
      class Fee implements IFee {
        /**
         * Constructs a new Fee.
         * @param [p] Properties to set
         */
        constructor(p?: cosmos.tx.v1beta1.IFee);

        /** Fee amount. */
        public amount: cosmos.base.v1beta1.ICoin[];

        /** Fee gasLimit. */
        public gasLimit: Long;

        /** Fee payer. */
        public payer: string;

        /** Fee granter. */
        public granter: string;

        /**
         * Creates a new Fee instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Fee instance
         */
        public static create(
          properties?: cosmos.tx.v1beta1.IFee
        ): cosmos.tx.v1beta1.Fee;

        /**
         * Encodes the specified Fee message. Does not implicitly {@link cosmos.tx.v1beta1.Fee.verify|verify} messages.
         * @param m Fee message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmos.tx.v1beta1.IFee,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Fee message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Fee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmos.tx.v1beta1.Fee;

        /**
         * Creates a Fee message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns Fee
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmos.tx.v1beta1.Fee;

        /**
         * Creates a plain object from a Fee message. Also converts values to other types if specified.
         * @param m Fee
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmos.tx.v1beta1.Fee,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Fee to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }

    /** Namespace signing. */
    namespace signing {
      /** Namespace v1beta1. */
      namespace v1beta1 {
        /** SignMode enum. */
        enum SignMode {
          SIGN_MODE_UNSPECIFIED = 0,
          SIGN_MODE_DIRECT = 1,
          SIGN_MODE_TEXTUAL = 2,
          SIGN_MODE_LEGACY_AMINO_JSON = 127
        }

        /** Properties of a SignatureDescriptors. */
        interface ISignatureDescriptors {
          /** SignatureDescriptors signatures */
          signatures?: cosmos.tx.signing.v1beta1.ISignatureDescriptor[] | null;
        }

        /** Represents a SignatureDescriptors. */
        class SignatureDescriptors implements ISignatureDescriptors {
          /**
           * Constructs a new SignatureDescriptors.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.tx.signing.v1beta1.ISignatureDescriptors);

          /** SignatureDescriptors signatures. */
          public signatures: cosmos.tx.signing.v1beta1.ISignatureDescriptor[];

          /**
           * Creates a new SignatureDescriptors instance using the specified properties.
           * @param [properties] Properties to set
           * @returns SignatureDescriptors instance
           */
          public static create(
            properties?: cosmos.tx.signing.v1beta1.ISignatureDescriptors
          ): cosmos.tx.signing.v1beta1.SignatureDescriptors;

          /**
           * Encodes the specified SignatureDescriptors message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptors.verify|verify} messages.
           * @param m SignatureDescriptors message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.tx.signing.v1beta1.ISignatureDescriptors,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a SignatureDescriptors message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns SignatureDescriptors
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): cosmos.tx.signing.v1beta1.SignatureDescriptors;

          /**
           * Creates a SignatureDescriptors message from a plain object. Also converts values to their respective internal types.
           * @param d Plain object
           * @returns SignatureDescriptors
           */
          public static fromObject(d: {
            [k: string]: any;
          }): cosmos.tx.signing.v1beta1.SignatureDescriptors;

          /**
           * Creates a plain object from a SignatureDescriptors message. Also converts values to other types if specified.
           * @param m SignatureDescriptors
           * @param [o] Conversion options
           * @returns Plain object
           */
          public static toObject(
            m: cosmos.tx.signing.v1beta1.SignatureDescriptors,
            o?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this SignatureDescriptors to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a SignatureDescriptor. */
        interface ISignatureDescriptor {
          /** SignatureDescriptor publicKey */
          publicKey?: google.protobuf.IAny | null;

          /** SignatureDescriptor data */
          data?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData | null;

          /** SignatureDescriptor sequence */
          sequence?: Long | null;
        }

        /** Represents a SignatureDescriptor. */
        class SignatureDescriptor implements ISignatureDescriptor {
          /**
           * Constructs a new SignatureDescriptor.
           * @param [p] Properties to set
           */
          constructor(p?: cosmos.tx.signing.v1beta1.ISignatureDescriptor);

          /** SignatureDescriptor publicKey. */
          public publicKey?: google.protobuf.IAny | null;

          /** SignatureDescriptor data. */
          public data?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData | null;

          /** SignatureDescriptor sequence. */
          public sequence: Long;

          /**
           * Creates a new SignatureDescriptor instance using the specified properties.
           * @param [properties] Properties to set
           * @returns SignatureDescriptor instance
           */
          public static create(
            properties?: cosmos.tx.signing.v1beta1.ISignatureDescriptor
          ): cosmos.tx.signing.v1beta1.SignatureDescriptor;

          /**
           * Encodes the specified SignatureDescriptor message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.verify|verify} messages.
           * @param m SignatureDescriptor message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmos.tx.signing.v1beta1.ISignatureDescriptor,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a SignatureDescriptor message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns SignatureDescriptor
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): cosmos.tx.signing.v1beta1.SignatureDescriptor;

          /**
           * Creates a SignatureDescriptor message from a plain object. Also converts values to their respective internal types.
           * @param d Plain object
           * @returns SignatureDescriptor
           */
          public static fromObject(d: {
            [k: string]: any;
          }): cosmos.tx.signing.v1beta1.SignatureDescriptor;

          /**
           * Creates a plain object from a SignatureDescriptor message. Also converts values to other types if specified.
           * @param m SignatureDescriptor
           * @param [o] Conversion options
           * @returns Plain object
           */
          public static toObject(
            m: cosmos.tx.signing.v1beta1.SignatureDescriptor,
            o?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this SignatureDescriptor to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        namespace SignatureDescriptor {
          /** Properties of a Data. */
          interface IData {
            /** Data single */
            single?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle | null;

            /** Data multi */
            multi?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti | null;
          }

          /** Represents a Data. */
          class Data implements IData {
            /**
             * Constructs a new Data.
             * @param [p] Properties to set
             */
            constructor(
              p?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData
            );

            /** Data single. */
            public single?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle | null;

            /** Data multi. */
            public multi?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti | null;

            /** Data sum. */
            public sum?: 'single' | 'multi';

            /**
             * Creates a new Data instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Data instance
             */
            public static create(
              properties?: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData
            ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data;

            /**
             * Encodes the specified Data message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.verify|verify} messages.
             * @param m Data message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(
              m: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData,
              w?: $protobuf.Writer
            ): $protobuf.Writer;

            /**
             * Decodes a Data message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(
              r: $protobuf.Reader | Uint8Array,
              l?: number
            ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data;

            /**
             * Creates a Data message from a plain object. Also converts values to their respective internal types.
             * @param d Plain object
             * @returns Data
             */
            public static fromObject(d: {
              [k: string]: any;
            }): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data;

            /**
             * Creates a plain object from a Data message. Also converts values to other types if specified.
             * @param m Data
             * @param [o] Conversion options
             * @returns Plain object
             */
            public static toObject(
              m: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data,
              o?: $protobuf.IConversionOptions
            ): { [k: string]: any };

            /**
             * Converts this Data to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
          }

          namespace Data {
            /** Properties of a Single. */
            interface ISingle {
              /** Single mode */
              mode?: cosmos.tx.signing.v1beta1.SignMode | null;

              /** Single signature */
              signature?: Uint8Array | null;
            }

            /** Represents a Single. */
            class Single implements ISingle {
              /**
               * Constructs a new Single.
               * @param [p] Properties to set
               */
              constructor(
                p?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle
              );

              /** Single mode. */
              public mode: cosmos.tx.signing.v1beta1.SignMode;

              /** Single signature. */
              public signature: Uint8Array;

              /**
               * Creates a new Single instance using the specified properties.
               * @param [properties] Properties to set
               * @returns Single instance
               */
              public static create(
                properties?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle
              ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single;

              /**
               * Encodes the specified Single message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single.verify|verify} messages.
               * @param m Single message or plain object to encode
               * @param [w] Writer to encode to
               * @returns Writer
               */
              public static encode(
                m: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.ISingle,
                w?: $protobuf.Writer
              ): $protobuf.Writer;

              /**
               * Decodes a Single message from the specified reader or buffer.
               * @param r Reader or buffer to decode from
               * @param [l] Message length if known beforehand
               * @returns Single
               * @throws {Error} If the payload is not a reader or valid buffer
               * @throws {$protobuf.util.ProtocolError} If required fields are missing
               */
              public static decode(
                r: $protobuf.Reader | Uint8Array,
                l?: number
              ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single;

              /**
               * Creates a Single message from a plain object. Also converts values to their respective internal types.
               * @param d Plain object
               * @returns Single
               */
              public static fromObject(d: {
                [k: string]: any;
              }): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single;

              /**
               * Creates a plain object from a Single message. Also converts values to other types if specified.
               * @param m Single
               * @param [o] Conversion options
               * @returns Plain object
               */
              public static toObject(
                m: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Single,
                o?: $protobuf.IConversionOptions
              ): { [k: string]: any };

              /**
               * Converts this Single to JSON.
               * @returns JSON object
               */
              public toJSON(): { [k: string]: any };
            }

            /** Properties of a Multi. */
            interface IMulti {
              /** Multi bitarray */
              bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

              /** Multi signatures */
              signatures?:
                | cosmos.tx.signing.v1beta1.SignatureDescriptor.IData[]
                | null;
            }

            /** Represents a Multi. */
            class Multi implements IMulti {
              /**
               * Constructs a new Multi.
               * @param [p] Properties to set
               */
              constructor(
                p?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti
              );

              /** Multi bitarray. */
              public bitarray?: cosmos.crypto.multisig.v1beta1.ICompactBitArray | null;

              /** Multi signatures. */
              public signatures: cosmos.tx.signing.v1beta1.SignatureDescriptor.IData[];

              /**
               * Creates a new Multi instance using the specified properties.
               * @param [properties] Properties to set
               * @returns Multi instance
               */
              public static create(
                properties?: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti
              ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi;

              /**
               * Encodes the specified Multi message. Does not implicitly {@link cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi.verify|verify} messages.
               * @param m Multi message or plain object to encode
               * @param [w] Writer to encode to
               * @returns Writer
               */
              public static encode(
                m: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.IMulti,
                w?: $protobuf.Writer
              ): $protobuf.Writer;

              /**
               * Decodes a Multi message from the specified reader or buffer.
               * @param r Reader or buffer to decode from
               * @param [l] Message length if known beforehand
               * @returns Multi
               * @throws {Error} If the payload is not a reader or valid buffer
               * @throws {$protobuf.util.ProtocolError} If required fields are missing
               */
              public static decode(
                r: $protobuf.Reader | Uint8Array,
                l?: number
              ): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi;

              /**
               * Creates a Multi message from a plain object. Also converts values to their respective internal types.
               * @param d Plain object
               * @returns Multi
               */
              public static fromObject(d: {
                [k: string]: any;
              }): cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi;

              /**
               * Creates a plain object from a Multi message. Also converts values to other types if specified.
               * @param m Multi
               * @param [o] Conversion options
               * @returns Plain object
               */
              public static toObject(
                m: cosmos.tx.signing.v1beta1.SignatureDescriptor.Data.Multi,
                o?: $protobuf.IConversionOptions
              ): { [k: string]: any };

              /**
               * Converts this Multi to JSON.
               * @returns JSON object
               */
              public toJSON(): { [k: string]: any };
            }
          }
        }
      }
    }
  }
}

/** Namespace google. */
export namespace google {
  /** Namespace protobuf. */
  namespace protobuf {
    /** Properties of an Any. */
    interface IAny {
      /** Any type_url */
      type_url?: string | null;

      /** Any value */
      value?: Uint8Array | null;
    }

    /** Represents an Any. */
    class Any implements IAny {
      /**
       * Constructs a new Any.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.IAny);

      /** Any type_url. */
      public type_url: string;

      /** Any value. */
      public value: Uint8Array;

      /**
       * Creates a new Any instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Any instance
       */
      public static create(
        properties?: google.protobuf.IAny
      ): google.protobuf.Any;

      /**
       * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
       * @param m Any message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: google.protobuf.IAny,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Any message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Any
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): google.protobuf.Any;

      /**
       * Creates an Any message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns Any
       */
      public static fromObject(d: { [k: string]: any }): google.protobuf.Any;

      /**
       * Creates a plain object from an Any message. Also converts values to other types if specified.
       * @param m Any
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: google.protobuf.Any,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Any to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a Timestamp. */
    interface ITimestamp {
      /** Timestamp seconds */
      seconds?: Long | null;

      /** Timestamp nanos */
      nanos?: number | null;
    }

    /** Represents a Timestamp. */
    class Timestamp implements ITimestamp {
      /**
       * Constructs a new Timestamp.
       * @param [p] Properties to set
       */
      constructor(p?: google.protobuf.ITimestamp);

      /** Timestamp seconds. */
      public seconds: Long;

      /** Timestamp nanos. */
      public nanos: number;

      /**
       * Creates a new Timestamp instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Timestamp instance
       */
      public static create(
        properties?: google.protobuf.ITimestamp
      ): google.protobuf.Timestamp;

      /**
       * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @param m Timestamp message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: google.protobuf.ITimestamp,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Timestamp message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): google.protobuf.Timestamp;

      /**
       * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns Timestamp
       */
      public static fromObject(d: {
        [k: string]: any;
      }): google.protobuf.Timestamp;

      /**
       * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
       * @param m Timestamp
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: google.protobuf.Timestamp,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Timestamp to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }
}

/** Namespace ibc. */
export namespace ibc {
  /** Namespace applications. */
  namespace applications {
    /** Namespace transfer. */
    namespace transfer {
      /** Namespace v1. */
      namespace v1 {
        /** Represents a Msg */
        class Msg extends $protobuf.rpc.Service {
          /**
           * Constructs a new Msg service.
           * @param rpcImpl RPC implementation
           * @param [requestDelimited=false] Whether requests are length-delimited
           * @param [responseDelimited=false] Whether responses are length-delimited
           */
          constructor(
            rpcImpl: $protobuf.RPCImpl,
            requestDelimited?: boolean,
            responseDelimited?: boolean
          );

          /**
           * Creates new Msg service using the specified rpc implementation.
           * @param rpcImpl RPC implementation
           * @param [requestDelimited=false] Whether requests are length-delimited
           * @param [responseDelimited=false] Whether responses are length-delimited
           * @returns RPC service. Useful where requests and/or responses are streamed.
           */
          public static create(
            rpcImpl: $protobuf.RPCImpl,
            requestDelimited?: boolean,
            responseDelimited?: boolean
          ): Msg;

          /**
           * Calls Transfer.
           * @param request MsgTransfer message or plain object
           * @param callback Node-style callback called with the error, if any, and MsgTransferResponse
           */
          public transfer(
            request: ibc.applications.transfer.v1.IMsgTransfer,
            callback: ibc.applications.transfer.v1.Msg.TransferCallback
          ): void;

          /**
           * Calls Transfer.
           * @param request MsgTransfer message or plain object
           * @returns Promise
           */
          public transfer(
            request: ibc.applications.transfer.v1.IMsgTransfer
          ): Promise<ibc.applications.transfer.v1.MsgTransferResponse>;
        }

        namespace Msg {
          /**
           * Callback as used by {@link ibc.applications.transfer.v1.Msg#transfer}.
           * @param error Error, if any
           * @param [response] MsgTransferResponse
           */
          type TransferCallback = (
            error: Error | null,
            response?: ibc.applications.transfer.v1.MsgTransferResponse
          ) => void;
        }

        /** Properties of a MsgTransfer. */
        interface IMsgTransfer {
          /** MsgTransfer sourcePort */
          sourcePort?: string | null;

          /** MsgTransfer sourceChannel */
          sourceChannel?: string | null;

          /** MsgTransfer token */
          token?: cosmos.base.v1beta1.ICoin | null;

          /** MsgTransfer sender */
          sender?: string | null;

          /** MsgTransfer receiver */
          receiver?: string | null;

          /** MsgTransfer timeoutHeight */
          timeoutHeight?: ibc.core.client.v1.IHeight | null;

          /** MsgTransfer timeoutTimestamp */
          timeoutTimestamp?: Long | null;
        }

        /** Represents a MsgTransfer. */
        class MsgTransfer implements IMsgTransfer {
          /**
           * Constructs a new MsgTransfer.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.applications.transfer.v1.IMsgTransfer);

          /** MsgTransfer sourcePort. */
          public sourcePort: string;

          /** MsgTransfer sourceChannel. */
          public sourceChannel: string;

          /** MsgTransfer token. */
          public token?: cosmos.base.v1beta1.ICoin | null;

          /** MsgTransfer sender. */
          public sender: string;

          /** MsgTransfer receiver. */
          public receiver: string;

          /** MsgTransfer timeoutHeight. */
          public timeoutHeight?: ibc.core.client.v1.IHeight | null;

          /** MsgTransfer timeoutTimestamp. */
          public timeoutTimestamp: Long;

          /**
           * Creates a new MsgTransfer instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MsgTransfer instance
           */
          public static create(
            properties?: ibc.applications.transfer.v1.IMsgTransfer
          ): ibc.applications.transfer.v1.MsgTransfer;

          /**
           * Encodes the specified MsgTransfer message. Does not implicitly {@link ibc.applications.transfer.v1.MsgTransfer.verify|verify} messages.
           * @param m MsgTransfer message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.applications.transfer.v1.IMsgTransfer,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a MsgTransfer message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns MsgTransfer
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): ibc.applications.transfer.v1.MsgTransfer;

          /**
           * Creates a MsgTransfer message from a plain object. Also converts values to their respective internal types.
           * @param d Plain object
           * @returns MsgTransfer
           */
          public static fromObject(d: {
            [k: string]: any;
          }): ibc.applications.transfer.v1.MsgTransfer;

          /**
           * Creates a plain object from a MsgTransfer message. Also converts values to other types if specified.
           * @param m MsgTransfer
           * @param [o] Conversion options
           * @returns Plain object
           */
          public static toObject(
            m: ibc.applications.transfer.v1.MsgTransfer,
            o?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this MsgTransfer to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgTransferResponse. */
        interface IMsgTransferResponse {}

        /** Represents a MsgTransferResponse. */
        class MsgTransferResponse implements IMsgTransferResponse {
          /**
           * Constructs a new MsgTransferResponse.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.applications.transfer.v1.IMsgTransferResponse);

          /**
           * Creates a new MsgTransferResponse instance using the specified properties.
           * @param [properties] Properties to set
           * @returns MsgTransferResponse instance
           */
          public static create(
            properties?: ibc.applications.transfer.v1.IMsgTransferResponse
          ): ibc.applications.transfer.v1.MsgTransferResponse;

          /**
           * Encodes the specified MsgTransferResponse message. Does not implicitly {@link ibc.applications.transfer.v1.MsgTransferResponse.verify|verify} messages.
           * @param m MsgTransferResponse message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.applications.transfer.v1.IMsgTransferResponse,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a MsgTransferResponse message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns MsgTransferResponse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): ibc.applications.transfer.v1.MsgTransferResponse;

          /**
           * Creates a MsgTransferResponse message from a plain object. Also converts values to their respective internal types.
           * @param d Plain object
           * @returns MsgTransferResponse
           */
          public static fromObject(d: {
            [k: string]: any;
          }): ibc.applications.transfer.v1.MsgTransferResponse;

          /**
           * Creates a plain object from a MsgTransferResponse message. Also converts values to other types if specified.
           * @param m MsgTransferResponse
           * @param [o] Conversion options
           * @returns Plain object
           */
          public static toObject(
            m: ibc.applications.transfer.v1.MsgTransferResponse,
            o?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this MsgTransferResponse to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }
    }
  }

  /** Namespace core. */
  namespace core {
    /** Namespace client. */
    namespace client {
      /** Namespace v1. */
      namespace v1 {
        /** Properties of an Height. */
        interface IHeight {
          /** Height revisionNumber */
          revisionNumber?: Long | null;

          /** Height revisionHeight */
          revisionHeight?: Long | null;
        }

        /** Represents an Height. */
        class Height implements IHeight {
          /**
           * Constructs a new Height.
           * @param [p] Properties to set
           */
          constructor(p?: ibc.core.client.v1.IHeight);

          /** Height revisionNumber. */
          public revisionNumber: Long;

          /** Height revisionHeight. */
          public revisionHeight: Long;

          /**
           * Creates a new Height instance using the specified properties.
           * @param [properties] Properties to set
           * @returns Height instance
           */
          public static create(
            properties?: ibc.core.client.v1.IHeight
          ): ibc.core.client.v1.Height;

          /**
           * Encodes the specified Height message. Does not implicitly {@link ibc.core.client.v1.Height.verify|verify} messages.
           * @param m Height message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: ibc.core.client.v1.IHeight,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes an Height message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns Height
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): ibc.core.client.v1.Height;

          /**
           * Creates an Height message from a plain object. Also converts values to their respective internal types.
           * @param d Plain object
           * @returns Height
           */
          public static fromObject(d: {
            [k: string]: any;
          }): ibc.core.client.v1.Height;

          /**
           * Creates a plain object from an Height message. Also converts values to other types if specified.
           * @param m Height
           * @param [o] Conversion options
           * @returns Plain object
           */
          public static toObject(
            m: ibc.core.client.v1.Height,
            o?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this Height to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }
    }
  }
}

/** Namespace cosmwasm. */
export namespace cosmwasm {
  /** Namespace wasm. */
  namespace wasm {
    namespace v1beta1 {
      /** Properties of a QueryContractInfoRequest. */
      interface IQueryContractInfoRequest {
        /** QueryContractInfoRequest address */
        address?: string | null;
      }

      /** Represents a QueryContractInfoRequest. */
      class QueryContractInfoRequest implements IQueryContractInfoRequest {
        /**
         * Constructs a new QueryContractInfoRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryContractInfoRequest);

        /** QueryContractInfoRequest address. */
        public address: string;

        /**
         * Encodes the specified QueryContractInfoRequest message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryContractInfoRequest.verify|verify} messages.
         * @param m QueryContractInfoRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryContractInfoRequest,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryContractInfoRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryContractInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryContractInfoRequest;
      }

      /** Properties of a QueryContractInfoResponse. */
      interface IQueryContractInfoResponse {
        /** QueryContractInfoResponse address */
        address?: string | null;

        /** QueryContractInfoResponse contract_info */
        contract_info?: cosmwasm.wasm.v1beta1.IContractInfo | null;
      }

      /** Represents a QueryContractInfoResponse. */
      class QueryContractInfoResponse implements IQueryContractInfoResponse {
        /**
         * Constructs a new QueryContractInfoResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryContractInfoResponse);

        /** QueryContractInfoResponse address. */
        public address: string;

        /** QueryContractInfoResponse contract_info. */
        public contract_info?: cosmwasm.wasm.v1beta1.IContractInfo | null;

        /**
         * Encodes the specified QueryContractInfoResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryContractInfoResponse.verify|verify} messages.
         * @param m QueryContractInfoResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryContractInfoResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryContractInfoResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryContractInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryContractInfoResponse;
      }

      /** Properties of a QueryContractHistoryRequest. */
      interface IQueryContractHistoryRequest {
        /** QueryContractHistoryRequest address */
        address?: string | null;

        /** QueryContractHistoryRequest pagination */
        pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
      }

      /** Represents a QueryContractHistoryRequest. */
      class QueryContractHistoryRequest
        implements IQueryContractHistoryRequest {
        /**
         * Constructs a new QueryContractHistoryRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryContractHistoryRequest);

        /** QueryContractHistoryRequest address. */
        public address: string;

        /** QueryContractHistoryRequest pagination. */
        public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

        /**
         * Encodes the specified QueryContractHistoryRequest message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryContractHistoryRequest.verify|verify} messages.
         * @param m QueryContractHistoryRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryContractHistoryRequest,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryContractHistoryRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryContractHistoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryContractHistoryRequest;
      }

      /** Properties of a QueryContractHistoryResponse. */
      interface IQueryContractHistoryResponse {
        /** QueryContractHistoryResponse entries */
        entries?: cosmwasm.wasm.v1beta1.IContractCodeHistoryEntry[] | null;

        /** QueryContractHistoryResponse pagination */
        pagination?: cosmos.base.query.v1beta1.IPageResponse | null;
      }

      /** Represents a QueryContractHistoryResponse. */
      class QueryContractHistoryResponse
        implements IQueryContractHistoryResponse {
        /**
         * Constructs a new QueryContractHistoryResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryContractHistoryResponse);

        /** QueryContractHistoryResponse entries. */
        public entries: cosmwasm.wasm.v1beta1.IContractCodeHistoryEntry[];

        /** QueryContractHistoryResponse pagination. */
        public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

        /**
         * Encodes the specified QueryContractHistoryResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryContractHistoryResponse.verify|verify} messages.
         * @param m QueryContractHistoryResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryContractHistoryResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryContractHistoryResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryContractHistoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryContractHistoryResponse;
      }

      /** Properties of a QueryContractsByCodeRequest. */
      interface IQueryContractsByCodeRequest {
        /** QueryContractsByCodeRequest code_id */
        code_id?: Long | null;

        /** QueryContractsByCodeRequest pagination */
        pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
      }

      /** Represents a QueryContractsByCodeRequest. */
      class QueryContractsByCodeRequest
        implements IQueryContractsByCodeRequest {
        /**
         * Constructs a new QueryContractsByCodeRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryContractsByCodeRequest);

        /** QueryContractsByCodeRequest code_id. */
        public code_id: Long;

        /** QueryContractsByCodeRequest pagination. */
        public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

        /**
         * Encodes the specified QueryContractsByCodeRequest message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryContractsByCodeRequest.verify|verify} messages.
         * @param m QueryContractsByCodeRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryContractsByCodeRequest,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryContractsByCodeRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryContractsByCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryContractsByCodeRequest;
      }

      /** Properties of a ContractInfoWithAddress. */
      interface IContractInfoWithAddress {
        /** ContractInfoWithAddress address */
        address?: string | null;

        /** ContractInfoWithAddress contract_info */
        contract_info?: cosmwasm.wasm.v1beta1.IContractInfo | null;
      }

      /** Represents a ContractInfoWithAddress. */
      class ContractInfoWithAddress implements IContractInfoWithAddress {
        /**
         * Constructs a new ContractInfoWithAddress.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IContractInfoWithAddress);

        /** ContractInfoWithAddress address. */
        public address: string;

        /** ContractInfoWithAddress contract_info. */
        public contract_info?: cosmwasm.wasm.v1beta1.IContractInfo | null;

        /**
         * Encodes the specified ContractInfoWithAddress message. Does not implicitly {@link cosmwasm.wasm.v1beta1.ContractInfoWithAddress.verify|verify} messages.
         * @param m ContractInfoWithAddress message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IContractInfoWithAddress,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ContractInfoWithAddress message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ContractInfoWithAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.ContractInfoWithAddress;
      }

      /** Properties of a QueryContractsByCodeResponse. */
      interface IQueryContractsByCodeResponse {
        /** QueryContractsByCodeResponse contract_infos */
        contract_infos?:
          | cosmwasm.wasm.v1beta1.IContractInfoWithAddress[]
          | null;

        /** QueryContractsByCodeResponse pagination */
        pagination?: cosmos.base.query.v1beta1.IPageResponse | null;
      }

      /** Represents a QueryContractsByCodeResponse. */
      class QueryContractsByCodeResponse
        implements IQueryContractsByCodeResponse {
        /**
         * Constructs a new QueryContractsByCodeResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryContractsByCodeResponse);

        /** QueryContractsByCodeResponse contract_infos. */
        public contract_infos: cosmwasm.wasm.v1beta1.IContractInfoWithAddress[];

        /** QueryContractsByCodeResponse pagination. */
        public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

        /**
         * Encodes the specified QueryContractsByCodeResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryContractsByCodeResponse.verify|verify} messages.
         * @param m QueryContractsByCodeResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryContractsByCodeResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryContractsByCodeResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryContractsByCodeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryContractsByCodeResponse;
      }

      /** Properties of a QueryAllContractStateRequest. */
      interface IQueryAllContractStateRequest {
        /** QueryAllContractStateRequest address */
        address?: string | null;

        /** QueryAllContractStateRequest pagination */
        pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
      }

      /** Represents a QueryAllContractStateRequest. */
      class QueryAllContractStateRequest
        implements IQueryAllContractStateRequest {
        /**
         * Constructs a new QueryAllContractStateRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryAllContractStateRequest);

        /** QueryAllContractStateRequest address. */
        public address: string;

        /** QueryAllContractStateRequest pagination. */
        public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

        /**
         * Encodes the specified QueryAllContractStateRequest message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryAllContractStateRequest.verify|verify} messages.
         * @param m QueryAllContractStateRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryAllContractStateRequest,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryAllContractStateRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryAllContractStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryAllContractStateRequest;
      }

      /** Properties of a QueryAllContractStateResponse. */
      interface IQueryAllContractStateResponse {
        /** QueryAllContractStateResponse models */
        models?: cosmwasm.wasm.v1beta1.IModel[] | null;

        /** QueryAllContractStateResponse pagination */
        pagination?: cosmos.base.query.v1beta1.IPageResponse | null;
      }

      /** Represents a QueryAllContractStateResponse. */
      class QueryAllContractStateResponse
        implements IQueryAllContractStateResponse {
        /**
         * Constructs a new QueryAllContractStateResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryAllContractStateResponse);

        /** QueryAllContractStateResponse models. */
        public models: cosmwasm.wasm.v1beta1.IModel[];

        /** QueryAllContractStateResponse pagination. */
        public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

        /**
         * Encodes the specified QueryAllContractStateResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryAllContractStateResponse.verify|verify} messages.
         * @param m QueryAllContractStateResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryAllContractStateResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryAllContractStateResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryAllContractStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryAllContractStateResponse;
      }

      /** Properties of a QueryRawContractStateRequest. */
      interface IQueryRawContractStateRequest {
        /** QueryRawContractStateRequest address */
        address?: string | null;

        /** QueryRawContractStateRequest query_data */
        query_data?: Uint8Array | null;
      }

      /** Represents a QueryRawContractStateRequest. */
      class QueryRawContractStateRequest
        implements IQueryRawContractStateRequest {
        /**
         * Constructs a new QueryRawContractStateRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryRawContractStateRequest);

        /** QueryRawContractStateRequest address. */
        public address: string;

        /** QueryRawContractStateRequest query_data. */
        public query_data: Uint8Array;

        /**
         * Encodes the specified QueryRawContractStateRequest message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryRawContractStateRequest.verify|verify} messages.
         * @param m QueryRawContractStateRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryRawContractStateRequest,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryRawContractStateRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryRawContractStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryRawContractStateRequest;
      }

      /** Properties of a QueryRawContractStateResponse. */
      interface IQueryRawContractStateResponse {
        /** QueryRawContractStateResponse data */
        data?: Uint8Array | null;
      }

      /** Represents a QueryRawContractStateResponse. */
      class QueryRawContractStateResponse
        implements IQueryRawContractStateResponse {
        /**
         * Constructs a new QueryRawContractStateResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryRawContractStateResponse);

        /** QueryRawContractStateResponse data. */
        public data: Uint8Array;

        /**
         * Encodes the specified QueryRawContractStateResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryRawContractStateResponse.verify|verify} messages.
         * @param m QueryRawContractStateResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryRawContractStateResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryRawContractStateResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryRawContractStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryRawContractStateResponse;
      }

      /** Properties of a QuerySmartContractStateRequest. */
      interface IQuerySmartContractStateRequest {
        /** QuerySmartContractStateRequest address */
        address?: string | null;

        /** QuerySmartContractStateRequest query_data */
        query_data?: Uint8Array | null;
      }

      /** Represents a QuerySmartContractStateRequest. */
      class QuerySmartContractStateRequest
        implements IQuerySmartContractStateRequest {
        /**
         * Constructs a new QuerySmartContractStateRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQuerySmartContractStateRequest);

        /** QuerySmartContractStateRequest address. */
        public address: string;

        /** QuerySmartContractStateRequest query_data. */
        public query_data: Uint8Array;

        /**
         * Encodes the specified QuerySmartContractStateRequest message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QuerySmartContractStateRequest.verify|verify} messages.
         * @param m QuerySmartContractStateRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQuerySmartContractStateRequest,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QuerySmartContractStateRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QuerySmartContractStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QuerySmartContractStateRequest;
      }

      /** Properties of a QuerySmartContractStateResponse. */
      interface IQuerySmartContractStateResponse {
        /** QuerySmartContractStateResponse data */
        data?: Uint8Array | null;
      }

      /** Represents a QuerySmartContractStateResponse. */
      class QuerySmartContractStateResponse
        implements IQuerySmartContractStateResponse {
        /**
         * Constructs a new QuerySmartContractStateResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQuerySmartContractStateResponse);

        /** QuerySmartContractStateResponse data. */
        public data: Uint8Array;

        /**
         * Encodes the specified QuerySmartContractStateResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QuerySmartContractStateResponse.verify|verify} messages.
         * @param m QuerySmartContractStateResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQuerySmartContractStateResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QuerySmartContractStateResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QuerySmartContractStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QuerySmartContractStateResponse;
      }

      /** Properties of a QueryCodeRequest. */
      interface IQueryCodeRequest {
        /** QueryCodeRequest code_id */
        code_id?: Long | null;
      }

      /** Represents a QueryCodeRequest. */
      class QueryCodeRequest implements IQueryCodeRequest {
        /**
         * Constructs a new QueryCodeRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryCodeRequest);

        /** QueryCodeRequest code_id. */
        public code_id: Long;

        /**
         * Encodes the specified QueryCodeRequest message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryCodeRequest.verify|verify} messages.
         * @param m QueryCodeRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryCodeRequest,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryCodeRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryCodeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryCodeRequest;
      }

      /** Properties of a CodeInfoResponse. */
      interface ICodeInfoResponse {
        /** CodeInfoResponse code_id */
        code_id?: Long | null;

        /** CodeInfoResponse creator */
        creator?: string | null;

        /** CodeInfoResponse data_hash */
        data_hash?: Uint8Array | null;

        /** CodeInfoResponse source */
        source?: string | null;

        /** CodeInfoResponse builder */
        builder?: string | null;
      }

      /** Represents a CodeInfoResponse. */
      class CodeInfoResponse implements ICodeInfoResponse {
        /**
         * Constructs a new CodeInfoResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.ICodeInfoResponse);

        /** CodeInfoResponse code_id. */
        public code_id: Long;

        /** CodeInfoResponse creator. */
        public creator: string;

        /** CodeInfoResponse data_hash. */
        public data_hash: Uint8Array;

        /** CodeInfoResponse source. */
        public source: string;

        /** CodeInfoResponse builder. */
        public builder: string;

        /**
         * Encodes the specified CodeInfoResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.CodeInfoResponse.verify|verify} messages.
         * @param m CodeInfoResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.ICodeInfoResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CodeInfoResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CodeInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.CodeInfoResponse;
      }

      /** Properties of a QueryCodeResponse. */
      interface IQueryCodeResponse {
        /** QueryCodeResponse code_info */
        code_info?: cosmwasm.wasm.v1beta1.ICodeInfoResponse | null;

        /** QueryCodeResponse data */
        data?: Uint8Array | null;
      }

      /** Represents a QueryCodeResponse. */
      class QueryCodeResponse implements IQueryCodeResponse {
        /**
         * Constructs a new QueryCodeResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryCodeResponse);

        /** QueryCodeResponse code_info. */
        public code_info?: cosmwasm.wasm.v1beta1.ICodeInfoResponse | null;

        /** QueryCodeResponse data. */
        public data: Uint8Array;

        /**
         * Encodes the specified QueryCodeResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryCodeResponse.verify|verify} messages.
         * @param m QueryCodeResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryCodeResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryCodeResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryCodeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryCodeResponse;
      }

      /** Properties of a QueryCodesRequest. */
      interface IQueryCodesRequest {
        /** QueryCodesRequest pagination */
        pagination?: cosmos.base.query.v1beta1.IPageRequest | null;
      }

      /** Represents a QueryCodesRequest. */
      class QueryCodesRequest implements IQueryCodesRequest {
        /**
         * Constructs a new QueryCodesRequest.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryCodesRequest);

        /** QueryCodesRequest pagination. */
        public pagination?: cosmos.base.query.v1beta1.IPageRequest | null;

        /**
         * Encodes the specified QueryCodesRequest message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryCodesRequest.verify|verify} messages.
         * @param m QueryCodesRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryCodesRequest,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryCodesRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryCodesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryCodesRequest;
      }

      /** Properties of a QueryCodesResponse. */
      interface IQueryCodesResponse {
        /** QueryCodesResponse code_infos */
        code_infos?: cosmwasm.wasm.v1beta1.ICodeInfoResponse[] | null;

        /** QueryCodesResponse pagination */
        pagination?: cosmos.base.query.v1beta1.IPageResponse | null;
      }

      /** Represents a QueryCodesResponse. */
      class QueryCodesResponse implements IQueryCodesResponse {
        /**
         * Constructs a new QueryCodesResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IQueryCodesResponse);

        /** QueryCodesResponse code_infos. */
        public code_infos: cosmwasm.wasm.v1beta1.ICodeInfoResponse[];

        /** QueryCodesResponse pagination. */
        public pagination?: cosmos.base.query.v1beta1.IPageResponse | null;

        /**
         * Encodes the specified QueryCodesResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.QueryCodesResponse.verify|verify} messages.
         * @param m QueryCodesResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IQueryCodesResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a QueryCodesResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QueryCodesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.QueryCodesResponse;
      }

      /** Properties of a StoreCodeProposal. */
      interface IStoreCodeProposal {
        /** StoreCodeProposal title */
        title?: string | null;

        /** StoreCodeProposal description */
        description?: string | null;

        /** StoreCodeProposal run_as */
        run_as?: string | null;

        /** StoreCodeProposal wasm_byte_code */
        wasm_byte_code?: Uint8Array | null;

        /** StoreCodeProposal source */
        source?: string | null;

        /** StoreCodeProposal builder */
        builder?: string | null;

        /** StoreCodeProposal instantiate_permission */
        instantiate_permission?: cosmwasm.wasm.v1beta1.IAccessConfig | null;
      }

      /** Represents a StoreCodeProposal. */
      class StoreCodeProposal implements IStoreCodeProposal {
        /**
         * Constructs a new StoreCodeProposal.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IStoreCodeProposal);

        /** StoreCodeProposal title. */
        public title: string;

        /** StoreCodeProposal description. */
        public description: string;

        /** StoreCodeProposal run_as. */
        public run_as: string;

        /** StoreCodeProposal wasm_byte_code. */
        public wasm_byte_code: Uint8Array;

        /** StoreCodeProposal source. */
        public source: string;

        /** StoreCodeProposal builder. */
        public builder: string;

        /** StoreCodeProposal instantiate_permission. */
        public instantiate_permission?: cosmwasm.wasm.v1beta1.IAccessConfig | null;

        /**
         * Encodes the specified StoreCodeProposal message. Does not implicitly {@link cosmwasm.wasm.v1beta1.StoreCodeProposal.verify|verify} messages.
         * @param m StoreCodeProposal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IStoreCodeProposal,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a StoreCodeProposal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns StoreCodeProposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.StoreCodeProposal;
      }

      /** Properties of an InstantiateContractProposal. */
      interface IInstantiateContractProposal {
        /** InstantiateContractProposal title */
        title?: string | null;

        /** InstantiateContractProposal description */
        description?: string | null;

        /** InstantiateContractProposal run_as */
        run_as?: string | null;

        /** InstantiateContractProposal admin */
        admin?: string | null;

        /** InstantiateContractProposal code_id */
        code_id?: Long | null;

        /** InstantiateContractProposal label */
        label?: string | null;

        /** InstantiateContractProposal init_msg */
        init_msg?: Uint8Array | null;

        /** InstantiateContractProposal init_funds */
        init_funds?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents an InstantiateContractProposal. */
      class InstantiateContractProposal
        implements IInstantiateContractProposal {
        /**
         * Constructs a new InstantiateContractProposal.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IInstantiateContractProposal);

        /** InstantiateContractProposal title. */
        public title: string;

        /** InstantiateContractProposal description. */
        public description: string;

        /** InstantiateContractProposal run_as. */
        public run_as: string;

        /** InstantiateContractProposal admin. */
        public admin: string;

        /** InstantiateContractProposal code_id. */
        public code_id: Long;

        /** InstantiateContractProposal label. */
        public label: string;

        /** InstantiateContractProposal init_msg. */
        public init_msg: Uint8Array;

        /** InstantiateContractProposal init_funds. */
        public init_funds: cosmos.base.v1beta1.ICoin[];

        /**
         * Encodes the specified InstantiateContractProposal message. Does not implicitly {@link cosmwasm.wasm.v1beta1.InstantiateContractProposal.verify|verify} messages.
         * @param m InstantiateContractProposal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IInstantiateContractProposal,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an InstantiateContractProposal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns InstantiateContractProposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.InstantiateContractProposal;
      }

      /** Properties of a MigrateContractProposal. */
      interface IMigrateContractProposal {
        /** MigrateContractProposal title */
        title?: string | null;

        /** MigrateContractProposal description */
        description?: string | null;

        /** MigrateContractProposal run_as */
        run_as?: string | null;

        /** MigrateContractProposal contract */
        contract?: string | null;

        /** MigrateContractProposal code_id */
        code_id?: Long | null;

        /** MigrateContractProposal migrate_msg */
        migrate_msg?: Uint8Array | null;
      }

      /** Represents a MigrateContractProposal. */
      class MigrateContractProposal implements IMigrateContractProposal {
        /**
         * Constructs a new MigrateContractProposal.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IMigrateContractProposal);

        /** MigrateContractProposal title. */
        public title: string;

        /** MigrateContractProposal description. */
        public description: string;

        /** MigrateContractProposal run_as. */
        public run_as: string;

        /** MigrateContractProposal contract. */
        public contract: string;

        /** MigrateContractProposal code_id. */
        public code_id: Long;

        /** MigrateContractProposal migrate_msg. */
        public migrate_msg: Uint8Array;

        /**
         * Encodes the specified MigrateContractProposal message. Does not implicitly {@link cosmwasm.wasm.v1beta1.MigrateContractProposal.verify|verify} messages.
         * @param m MigrateContractProposal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IMigrateContractProposal,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MigrateContractProposal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MigrateContractProposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.MigrateContractProposal;
      }

      /** Properties of an UpdateAdminProposal. */
      interface IUpdateAdminProposal {
        /** UpdateAdminProposal title */
        title?: string | null;

        /** UpdateAdminProposal description */
        description?: string | null;

        /** UpdateAdminProposal new_admin */
        new_admin?: string | null;

        /** UpdateAdminProposal contract */
        contract?: string | null;
      }

      /** Represents an UpdateAdminProposal. */
      class UpdateAdminProposal implements IUpdateAdminProposal {
        /**
         * Constructs a new UpdateAdminProposal.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IUpdateAdminProposal);

        /** UpdateAdminProposal title. */
        public title: string;

        /** UpdateAdminProposal description. */
        public description: string;

        /** UpdateAdminProposal new_admin. */
        public new_admin: string;

        /** UpdateAdminProposal contract. */
        public contract: string;

        /**
         * Encodes the specified UpdateAdminProposal message. Does not implicitly {@link cosmwasm.wasm.v1beta1.UpdateAdminProposal.verify|verify} messages.
         * @param m UpdateAdminProposal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IUpdateAdminProposal,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an UpdateAdminProposal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UpdateAdminProposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.UpdateAdminProposal;
      }

      /** Properties of a ClearAdminProposal. */
      interface IClearAdminProposal {
        /** ClearAdminProposal title */
        title?: string | null;

        /** ClearAdminProposal description */
        description?: string | null;

        /** ClearAdminProposal contract */
        contract?: string | null;
      }

      /** Represents a ClearAdminProposal. */
      class ClearAdminProposal implements IClearAdminProposal {
        /**
         * Constructs a new ClearAdminProposal.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IClearAdminProposal);

        /** ClearAdminProposal title. */
        public title: string;

        /** ClearAdminProposal description. */
        public description: string;

        /** ClearAdminProposal contract. */
        public contract: string;

        /**
         * Encodes the specified ClearAdminProposal message. Does not implicitly {@link cosmwasm.wasm.v1beta1.ClearAdminProposal.verify|verify} messages.
         * @param m ClearAdminProposal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IClearAdminProposal,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ClearAdminProposal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ClearAdminProposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.ClearAdminProposal;
      }

      /** Properties of a GenesisState. */
      interface IGenesisState {
        /** GenesisState params */
        params?: cosmwasm.wasm.v1beta1.IParams | null;

        /** GenesisState codes */
        codes?: cosmwasm.wasm.v1beta1.ICode[] | null;

        /** GenesisState contracts */
        contracts?: cosmwasm.wasm.v1beta1.IContract[] | null;

        /** GenesisState sequences */
        sequences?: cosmwasm.wasm.v1beta1.ISequence[] | null;

        /** GenesisState gen_msgs */
        gen_msgs?: cosmwasm.wasm.v1beta1.GenesisState.IGenMsgs[] | null;
      }

      /** Represents a GenesisState. */
      class GenesisState implements IGenesisState {
        /**
         * Constructs a new GenesisState.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IGenesisState);

        /** GenesisState params. */
        public params?: cosmwasm.wasm.v1beta1.IParams | null;

        /** GenesisState codes. */
        public codes: cosmwasm.wasm.v1beta1.ICode[];

        /** GenesisState contracts. */
        public contracts: cosmwasm.wasm.v1beta1.IContract[];

        /** GenesisState sequences. */
        public sequences: cosmwasm.wasm.v1beta1.ISequence[];

        /** GenesisState gen_msgs. */
        public gen_msgs: cosmwasm.wasm.v1beta1.GenesisState.IGenMsgs[];

        /**
         * Encodes the specified GenesisState message. Does not implicitly {@link cosmwasm.wasm.v1beta1.GenesisState.verify|verify} messages.
         * @param m GenesisState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IGenesisState,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a GenesisState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GenesisState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.GenesisState;
      }

      namespace GenesisState {
        /** Properties of a GenMsgs. */
        interface IGenMsgs {
          /** GenMsgs store_code */
          store_code?: cosmwasm.wasm.v1beta1.IMsgStoreCode | null;

          /** GenMsgs instantiate_contract */
          instantiate_contract?: cosmwasm.wasm.v1beta1.IMsgInstantiateContract | null;

          /** GenMsgs execute_contract */
          execute_contract?: cosmwasm.wasm.v1beta1.IMsgExecuteContract | null;
        }

        /** Represents a GenMsgs. */
        class GenMsgs implements IGenMsgs {
          /**
           * Constructs a new GenMsgs.
           * @param [p] Properties to set
           */
          constructor(p?: cosmwasm.wasm.v1beta1.GenesisState.IGenMsgs);

          /** GenMsgs store_code. */
          public store_code?: cosmwasm.wasm.v1beta1.IMsgStoreCode | null;

          /** GenMsgs instantiate_contract. */
          public instantiate_contract?: cosmwasm.wasm.v1beta1.IMsgInstantiateContract | null;

          /** GenMsgs execute_contract. */
          public execute_contract?: cosmwasm.wasm.v1beta1.IMsgExecuteContract | null;

          /** GenMsgs sum. */
          public sum?:
            | 'store_code'
            | 'instantiate_contract'
            | 'execute_contract';

          /**
           * Encodes the specified GenMsgs message. Does not implicitly {@link cosmwasm.wasm.v1beta1.GenesisState.GenMsgs.verify|verify} messages.
           * @param m GenMsgs message or plain object to encode
           * @param [w] Writer to encode to
           * @returns Writer
           */
          public static encode(
            m: cosmwasm.wasm.v1beta1.GenesisState.IGenMsgs,
            w?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a GenMsgs message from the specified reader or buffer.
           * @param r Reader or buffer to decode from
           * @param [l] Message length if known beforehand
           * @returns GenMsgs
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            r: $protobuf.Reader | Uint8Array,
            l?: number
          ): cosmwasm.wasm.v1beta1.GenesisState.GenMsgs;
        }
      }

      /** Properties of a Code. */
      interface ICode {
        /** Code code_id */
        code_id?: Long | null;

        /** Code code_info */
        code_info?: cosmwasm.wasm.v1beta1.ICodeInfo | null;

        /** Code code_bytes */
        code_bytes?: Uint8Array | null;
      }

      /** Represents a Code. */
      class Code implements ICode {
        /**
         * Constructs a new Code.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.ICode);

        /** Code code_id. */
        public code_id: Long;

        /** Code code_info. */
        public code_info?: cosmwasm.wasm.v1beta1.ICodeInfo | null;

        /** Code code_bytes. */
        public code_bytes: Uint8Array;

        /**
         * Encodes the specified Code message. Does not implicitly {@link cosmwasm.wasm.v1beta1.Code.verify|verify} messages.
         * @param m Code message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.ICode,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Code message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Code
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.Code;
      }

      /** Properties of a Contract. */
      interface IContract {
        /** Contract contract_address */
        contract_address?: string | null;

        /** Contract contract_info */
        contract_info?: cosmwasm.wasm.v1beta1.IContractInfo | null;

        /** Contract contract_state */
        contract_state?: cosmwasm.wasm.v1beta1.IModel[] | null;
      }

      /** Represents a Contract. */
      class Contract implements IContract {
        /**
         * Constructs a new Contract.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IContract);

        /** Contract contract_address. */
        public contract_address: string;

        /** Contract contract_info. */
        public contract_info?: cosmwasm.wasm.v1beta1.IContractInfo | null;

        /** Contract contract_state. */
        public contract_state: cosmwasm.wasm.v1beta1.IModel[];

        /**
         * Encodes the specified Contract message. Does not implicitly {@link cosmwasm.wasm.v1beta1.Contract.verify|verify} messages.
         * @param m Contract message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IContract,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Contract message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Contract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.Contract;
      }

      /** Properties of a Sequence. */
      interface ISequence {
        /** Sequence id_key */
        id_key?: Uint8Array | null;

        /** Sequence value */
        value?: Long | null;
      }

      /** Represents a Sequence. */
      class Sequence implements ISequence {
        /**
         * Constructs a new Sequence.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.ISequence);

        /** Sequence id_key. */
        public id_key: Uint8Array;

        /** Sequence value. */
        public value: Long;

        /**
         * Encodes the specified Sequence message. Does not implicitly {@link cosmwasm.wasm.v1beta1.Sequence.verify|verify} messages.
         * @param m Sequence message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.ISequence,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Sequence message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Sequence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.Sequence;
      }

      /** Properties of a MsgStoreCode. */
      interface IMsgStoreCode {
        /** MsgStoreCode sender */
        sender?: string | null;

        /** MsgStoreCode wasm_byte_code */
        wasm_byte_code?: Uint8Array | null;

        /** MsgStoreCode source */
        source?: string | null;

        /** MsgStoreCode builder */
        builder?: string | null;

        /** MsgStoreCode instantiate_permission */
        instantiate_permission?: cosmwasm.wasm.v1beta1.IAccessConfig | null;
      }

      /** Represents a MsgStoreCode. */
      class MsgStoreCode implements IMsgStoreCode {
        /**
         * Constructs a new MsgStoreCode.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IMsgStoreCode);

        /** MsgStoreCode sender. */
        public sender: string;

        /** MsgStoreCode wasm_byte_code. */
        public wasm_byte_code: Uint8Array;

        /** MsgStoreCode source. */
        public source: string;

        /** MsgStoreCode builder. */
        public builder: string;

        /** MsgStoreCode instantiate_permission. */
        public instantiate_permission?: cosmwasm.wasm.v1beta1.IAccessConfig | null;

        /**
         * Encodes the specified MsgStoreCode message. Does not implicitly {@link cosmwasm.wasm.v1beta1.MsgStoreCode.verify|verify} messages.
         * @param m MsgStoreCode message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IMsgStoreCode,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgStoreCode message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgStoreCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.MsgStoreCode;
      }

      /** Properties of a MsgStoreCodeResponse. */
      interface IMsgStoreCodeResponse {
        /** MsgStoreCodeResponse code_id */
        code_id?: Long | null;
      }

      /** Represents a MsgStoreCodeResponse. */
      class MsgStoreCodeResponse implements IMsgStoreCodeResponse {
        /**
         * Constructs a new MsgStoreCodeResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IMsgStoreCodeResponse);

        /** MsgStoreCodeResponse code_id. */
        public code_id: Long;

        /**
         * Encodes the specified MsgStoreCodeResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.MsgStoreCodeResponse.verify|verify} messages.
         * @param m MsgStoreCodeResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IMsgStoreCodeResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgStoreCodeResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgStoreCodeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.MsgStoreCodeResponse;
      }

      /** Properties of a MsgInstantiateContract. */
      interface IMsgInstantiateContract {
        /** MsgInstantiateContract sender */
        sender?: string | null;

        /** MsgInstantiateContract admin */
        admin?: string | null;

        /** MsgInstantiateContract code_id */
        code_id?: Long | null;

        /** MsgInstantiateContract label */
        label?: string | null;

        /** MsgInstantiateContract init_msg */
        init_msg?: Uint8Array | null;

        /** MsgInstantiateContract init_funds */
        init_funds?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a MsgInstantiateContract. */
      class MsgInstantiateContract implements IMsgInstantiateContract {
        /**
         * Constructs a new MsgInstantiateContract.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IMsgInstantiateContract);

        /** MsgInstantiateContract sender. */
        public sender: string;

        /** MsgInstantiateContract admin. */
        public admin: string;

        /** MsgInstantiateContract code_id. */
        public code_id: Long;

        /** MsgInstantiateContract label. */
        public label: string;

        /** MsgInstantiateContract init_msg. */
        public init_msg: Uint8Array;

        /** MsgInstantiateContract init_funds. */
        public init_funds: cosmos.base.v1beta1.ICoin[];

        /**
         * Encodes the specified MsgInstantiateContract message. Does not implicitly {@link cosmwasm.wasm.v1beta1.MsgInstantiateContract.verify|verify} messages.
         * @param m MsgInstantiateContract message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IMsgInstantiateContract,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgInstantiateContract message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgInstantiateContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.MsgInstantiateContract;
      }

      /** Properties of a MsgInstantiateContractResponse. */
      interface IMsgInstantiateContractResponse {
        /** MsgInstantiateContractResponse address */
        address?: string | null;
      }

      /** Represents a MsgInstantiateContractResponse. */
      class MsgInstantiateContractResponse
        implements IMsgInstantiateContractResponse {
        /**
         * Constructs a new MsgInstantiateContractResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IMsgInstantiateContractResponse);

        /** MsgInstantiateContractResponse address. */
        public address: string;

        /**
         * Encodes the specified MsgInstantiateContractResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.MsgInstantiateContractResponse.verify|verify} messages.
         * @param m MsgInstantiateContractResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IMsgInstantiateContractResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgInstantiateContractResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgInstantiateContractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.MsgInstantiateContractResponse;
      }

      /** Properties of a MsgExecuteContract. */
      interface IMsgExecuteContract {
        /** MsgExecuteContract sender */
        sender?: string | null;

        /** MsgExecuteContract contract */
        contract?: string | null;

        /** MsgExecuteContract msg */
        msg?: Uint8Array | null;

        /** MsgExecuteContract sent_funds */
        sent_funds?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a MsgExecuteContract. */
      class MsgExecuteContract implements IMsgExecuteContract {
        /**
         * Constructs a new MsgExecuteContract.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IMsgExecuteContract);

        /** MsgExecuteContract sender. */
        public sender: string;

        /** MsgExecuteContract contract. */
        public contract: string;

        /** MsgExecuteContract msg. */
        public msg: Uint8Array;

        /** MsgExecuteContract sent_funds. */
        public sent_funds: cosmos.base.v1beta1.ICoin[];

        /**
         * Encodes the specified MsgExecuteContract message. Does not implicitly {@link cosmwasm.wasm.v1beta1.MsgExecuteContract.verify|verify} messages.
         * @param m MsgExecuteContract message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IMsgExecuteContract,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgExecuteContract message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgExecuteContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.MsgExecuteContract;
      }

      /** Properties of a MsgExecuteContractResponse. */
      interface IMsgExecuteContractResponse {
        /** MsgExecuteContractResponse data */
        data?: Uint8Array | null;
      }

      /** Represents a MsgExecuteContractResponse. */
      class MsgExecuteContractResponse implements IMsgExecuteContractResponse {
        /**
         * Constructs a new MsgExecuteContractResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IMsgExecuteContractResponse);

        /** MsgExecuteContractResponse data. */
        public data: Uint8Array;

        /**
         * Encodes the specified MsgExecuteContractResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.MsgExecuteContractResponse.verify|verify} messages.
         * @param m MsgExecuteContractResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IMsgExecuteContractResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgExecuteContractResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgExecuteContractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.MsgExecuteContractResponse;
      }

      /** Properties of a MsgMigrateContract. */
      interface IMsgMigrateContract {
        /** MsgMigrateContract sender */
        sender?: string | null;

        /** MsgMigrateContract contract */
        contract?: string | null;

        /** MsgMigrateContract code_id */
        code_id?: Long | null;

        /** MsgMigrateContract migrate_msg */
        migrate_msg?: Uint8Array | null;
      }

      /** Represents a MsgMigrateContract. */
      class MsgMigrateContract implements IMsgMigrateContract {
        /**
         * Constructs a new MsgMigrateContract.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IMsgMigrateContract);

        /** MsgMigrateContract sender. */
        public sender: string;

        /** MsgMigrateContract contract. */
        public contract: string;

        /** MsgMigrateContract code_id. */
        public code_id: Long;

        /** MsgMigrateContract migrate_msg. */
        public migrate_msg: Uint8Array;

        /**
         * Encodes the specified MsgMigrateContract message. Does not implicitly {@link cosmwasm.wasm.v1beta1.MsgMigrateContract.verify|verify} messages.
         * @param m MsgMigrateContract message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IMsgMigrateContract,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgMigrateContract message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgMigrateContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.MsgMigrateContract;
      }

      /** Properties of a MsgMigrateContractResponse. */
      interface IMsgMigrateContractResponse {
        /** MsgMigrateContractResponse data */
        data?: Uint8Array | null;
      }

      /** Represents a MsgMigrateContractResponse. */
      class MsgMigrateContractResponse implements IMsgMigrateContractResponse {
        /**
         * Constructs a new MsgMigrateContractResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IMsgMigrateContractResponse);

        /** MsgMigrateContractResponse data. */
        public data: Uint8Array;

        /**
         * Encodes the specified MsgMigrateContractResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.MsgMigrateContractResponse.verify|verify} messages.
         * @param m MsgMigrateContractResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IMsgMigrateContractResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgMigrateContractResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgMigrateContractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.MsgMigrateContractResponse;
      }

      /** Properties of a MsgUpdateAdmin. */
      interface IMsgUpdateAdmin {
        /** MsgUpdateAdmin sender */
        sender?: string | null;

        /** MsgUpdateAdmin new_admin */
        new_admin?: string | null;

        /** MsgUpdateAdmin contract */
        contract?: string | null;
      }

      /** Represents a MsgUpdateAdmin. */
      class MsgUpdateAdmin implements IMsgUpdateAdmin {
        /**
         * Constructs a new MsgUpdateAdmin.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IMsgUpdateAdmin);

        /** MsgUpdateAdmin sender. */
        public sender: string;

        /** MsgUpdateAdmin new_admin. */
        public new_admin: string;

        /** MsgUpdateAdmin contract. */
        public contract: string;

        /**
         * Encodes the specified MsgUpdateAdmin message. Does not implicitly {@link cosmwasm.wasm.v1beta1.MsgUpdateAdmin.verify|verify} messages.
         * @param m MsgUpdateAdmin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IMsgUpdateAdmin,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgUpdateAdmin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgUpdateAdmin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.MsgUpdateAdmin;
      }

      /** Properties of a MsgUpdateAdminResponse. */
      interface IMsgUpdateAdminResponse {}

      /** Represents a MsgUpdateAdminResponse. */
      class MsgUpdateAdminResponse implements IMsgUpdateAdminResponse {
        /**
         * Constructs a new MsgUpdateAdminResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IMsgUpdateAdminResponse);

        /**
         * Encodes the specified MsgUpdateAdminResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.MsgUpdateAdminResponse.verify|verify} messages.
         * @param m MsgUpdateAdminResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IMsgUpdateAdminResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgUpdateAdminResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgUpdateAdminResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.MsgUpdateAdminResponse;
      }

      /** Properties of a MsgClearAdmin. */
      interface IMsgClearAdmin {
        /** MsgClearAdmin sender */
        sender?: string | null;

        /** MsgClearAdmin contract */
        contract?: string | null;
      }

      /** Represents a MsgClearAdmin. */
      class MsgClearAdmin implements IMsgClearAdmin {
        /**
         * Constructs a new MsgClearAdmin.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IMsgClearAdmin);

        /** MsgClearAdmin sender. */
        public sender: string;

        /** MsgClearAdmin contract. */
        public contract: string;

        /**
         * Encodes the specified MsgClearAdmin message. Does not implicitly {@link cosmwasm.wasm.v1beta1.MsgClearAdmin.verify|verify} messages.
         * @param m MsgClearAdmin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IMsgClearAdmin,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgClearAdmin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgClearAdmin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.MsgClearAdmin;
      }

      /** Properties of a MsgClearAdminResponse. */
      interface IMsgClearAdminResponse {}

      /** Represents a MsgClearAdminResponse. */
      class MsgClearAdminResponse implements IMsgClearAdminResponse {
        /**
         * Constructs a new MsgClearAdminResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IMsgClearAdminResponse);

        /**
         * Encodes the specified MsgClearAdminResponse message. Does not implicitly {@link cosmwasm.wasm.v1beta1.MsgClearAdminResponse.verify|verify} messages.
         * @param m MsgClearAdminResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IMsgClearAdminResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgClearAdminResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgClearAdminResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.MsgClearAdminResponse;
      }

      /** AccessType enum. */
      enum AccessType {
        ACCESS_TYPE_UNSPECIFIED = 0,
        ACCESS_TYPE_NOBODY = 1,
        ACCESS_TYPE_ONLY_ADDRESS = 2,
        ACCESS_TYPE_EVERYBODY = 3
      }

      /** Properties of an AccessTypeParam. */
      interface IAccessTypeParam {
        /** AccessTypeParam value */
        value?: cosmwasm.wasm.v1beta1.AccessType | null;
      }

      /** Represents an AccessTypeParam. */
      class AccessTypeParam implements IAccessTypeParam {
        /**
         * Constructs a new AccessTypeParam.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IAccessTypeParam);

        /** AccessTypeParam value. */
        public value: cosmwasm.wasm.v1beta1.AccessType;

        /**
         * Encodes the specified AccessTypeParam message. Does not implicitly {@link cosmwasm.wasm.v1beta1.AccessTypeParam.verify|verify} messages.
         * @param m AccessTypeParam message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IAccessTypeParam,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AccessTypeParam message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AccessTypeParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.AccessTypeParam;
      }

      /** Properties of an AccessConfig. */
      interface IAccessConfig {
        /** AccessConfig permission */
        permission?: cosmwasm.wasm.v1beta1.AccessType | null;

        /** AccessConfig address */
        address?: string | null;
      }

      /** Represents an AccessConfig. */
      class AccessConfig implements IAccessConfig {
        /**
         * Constructs a new AccessConfig.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IAccessConfig);

        /** AccessConfig permission. */
        public permission: cosmwasm.wasm.v1beta1.AccessType;

        /** AccessConfig address. */
        public address: string;

        /**
         * Encodes the specified AccessConfig message. Does not implicitly {@link cosmwasm.wasm.v1beta1.AccessConfig.verify|verify} messages.
         * @param m AccessConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IAccessConfig,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AccessConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AccessConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.AccessConfig;
      }

      /** Properties of a Params. */
      interface IParams {
        /** Params code_upload_access */
        code_upload_access?: cosmwasm.wasm.v1beta1.IAccessConfig | null;

        /** Params instantiate_default_permission */
        instantiate_default_permission?: cosmwasm.wasm.v1beta1.AccessType | null;

        /** Params max_wasm_code_size */
        max_wasm_code_size?: Long | null;
      }

      /** Represents a Params. */
      class Params implements IParams {
        /**
         * Constructs a new Params.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IParams);

        /** Params code_upload_access. */
        public code_upload_access?: cosmwasm.wasm.v1beta1.IAccessConfig | null;

        /** Params instantiate_default_permission. */
        public instantiate_default_permission: cosmwasm.wasm.v1beta1.AccessType;

        /** Params max_wasm_code_size. */
        public max_wasm_code_size: Long;

        /**
         * Encodes the specified Params message. Does not implicitly {@link cosmwasm.wasm.v1beta1.Params.verify|verify} messages.
         * @param m Params message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IParams,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Params message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Params
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.Params;
      }

      /** Properties of a CodeInfo. */
      interface ICodeInfo {
        /** CodeInfo code_hash */
        code_hash?: Uint8Array | null;

        /** CodeInfo creator */
        creator?: string | null;

        /** CodeInfo source */
        source?: string | null;

        /** CodeInfo builder */
        builder?: string | null;

        /** CodeInfo instantiate_config */
        instantiate_config?: cosmwasm.wasm.v1beta1.IAccessConfig | null;
      }

      /** Represents a CodeInfo. */
      class CodeInfo implements ICodeInfo {
        /**
         * Constructs a new CodeInfo.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.ICodeInfo);

        /** CodeInfo code_hash. */
        public code_hash: Uint8Array;

        /** CodeInfo creator. */
        public creator: string;

        /** CodeInfo source. */
        public source: string;

        /** CodeInfo builder. */
        public builder: string;

        /** CodeInfo instantiate_config. */
        public instantiate_config?: cosmwasm.wasm.v1beta1.IAccessConfig | null;

        /**
         * Encodes the specified CodeInfo message. Does not implicitly {@link cosmwasm.wasm.v1beta1.CodeInfo.verify|verify} messages.
         * @param m CodeInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.ICodeInfo,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CodeInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CodeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.CodeInfo;
      }

      /** Properties of a ContractInfo. */
      interface IContractInfo {
        /** ContractInfo code_id */
        code_id?: Long | null;

        /** ContractInfo creator */
        creator?: string | null;

        /** ContractInfo admin */
        admin?: string | null;

        /** ContractInfo label */
        label?: string | null;

        /** ContractInfo created */
        created?: cosmwasm.wasm.v1beta1.IAbsoluteTxPosition | null;
      }

      /** Represents a ContractInfo. */
      class ContractInfo implements IContractInfo {
        /**
         * Constructs a new ContractInfo.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IContractInfo);

        /** ContractInfo code_id. */
        public code_id: Long;

        /** ContractInfo creator. */
        public creator: string;

        /** ContractInfo admin. */
        public admin: string;

        /** ContractInfo label. */
        public label: string;

        /** ContractInfo created. */
        public created?: cosmwasm.wasm.v1beta1.IAbsoluteTxPosition | null;

        /**
         * Encodes the specified ContractInfo message. Does not implicitly {@link cosmwasm.wasm.v1beta1.ContractInfo.verify|verify} messages.
         * @param m ContractInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IContractInfo,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ContractInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ContractInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.ContractInfo;
      }

      /** ContractCodeHistoryOperationType enum. */
      enum ContractCodeHistoryOperationType {
        CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
        CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
        CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
        CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3
      }

      /** Properties of a ContractCodeHistoryEntry. */
      interface IContractCodeHistoryEntry {
        /** ContractCodeHistoryEntry operation */
        operation?: cosmwasm.wasm.v1beta1.ContractCodeHistoryOperationType | null;

        /** ContractCodeHistoryEntry code_id */
        code_id?: Long | null;

        /** ContractCodeHistoryEntry updated */
        updated?: cosmwasm.wasm.v1beta1.IAbsoluteTxPosition | null;

        /** ContractCodeHistoryEntry msg */
        msg?: Uint8Array | null;
      }

      /** Represents a ContractCodeHistoryEntry. */
      class ContractCodeHistoryEntry implements IContractCodeHistoryEntry {
        /**
         * Constructs a new ContractCodeHistoryEntry.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IContractCodeHistoryEntry);

        /** ContractCodeHistoryEntry operation. */
        public operation: cosmwasm.wasm.v1beta1.ContractCodeHistoryOperationType;

        /** ContractCodeHistoryEntry code_id. */
        public code_id: Long;

        /** ContractCodeHistoryEntry updated. */
        public updated?: cosmwasm.wasm.v1beta1.IAbsoluteTxPosition | null;

        /** ContractCodeHistoryEntry msg. */
        public msg: Uint8Array;

        /**
         * Encodes the specified ContractCodeHistoryEntry message. Does not implicitly {@link cosmwasm.wasm.v1beta1.ContractCodeHistoryEntry.verify|verify} messages.
         * @param m ContractCodeHistoryEntry message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IContractCodeHistoryEntry,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ContractCodeHistoryEntry message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ContractCodeHistoryEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.ContractCodeHistoryEntry;
      }

      /** Properties of an AbsoluteTxPosition. */
      interface IAbsoluteTxPosition {
        /** AbsoluteTxPosition block_height */
        block_height?: Long | null;

        /** AbsoluteTxPosition tx_index */
        tx_index?: Long | null;
      }

      /** Represents an AbsoluteTxPosition. */
      class AbsoluteTxPosition implements IAbsoluteTxPosition {
        /**
         * Constructs a new AbsoluteTxPosition.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IAbsoluteTxPosition);

        /** AbsoluteTxPosition block_height. */
        public block_height: Long;

        /** AbsoluteTxPosition tx_index. */
        public tx_index: Long;

        /**
         * Encodes the specified AbsoluteTxPosition message. Does not implicitly {@link cosmwasm.wasm.v1beta1.AbsoluteTxPosition.verify|verify} messages.
         * @param m AbsoluteTxPosition message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IAbsoluteTxPosition,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an AbsoluteTxPosition message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AbsoluteTxPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.AbsoluteTxPosition;
      }

      /** Properties of a Model. */
      interface IModel {
        /** Model key */
        key?: Uint8Array | null;

        /** Model value */
        value?: Uint8Array | null;
      }

      /** Represents a Model. */
      class Model implements IModel {
        /**
         * Constructs a new Model.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1beta1.IModel);

        /** Model key. */
        public key: Uint8Array;

        /** Model value. */
        public value: Uint8Array;

        /**
         * Encodes the specified Model message. Does not implicitly {@link cosmwasm.wasm.v1beta1.Model.verify|verify} messages.
         * @param m Model message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1beta1.IModel,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Model message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Model
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1beta1.Model;
      }
    }

    /** Namespace v1. */
    namespace v1 {
      /** Properties of a MsgExecuteContract. */
      interface IMsgExecuteContract {
        /** MsgExecuteContract sender */
        sender?: string | null;

        /** MsgExecuteContract contract */
        contract?: string | null;

        /** MsgExecuteContract msg */
        msg?: Uint8Array | null;

        /** MsgExecuteContract funds */
        funds?: cosmos.base.v1beta1.ICoin[] | null;
      }

      /** Represents a MsgExecuteContract. */
      class MsgExecuteContract implements IMsgExecuteContract {
        /**
         * Constructs a new MsgExecuteContract.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1.IMsgExecuteContract);

        /** MsgExecuteContract sender. */
        public sender: string;

        /** MsgExecuteContract contract. */
        public contract: string;

        /** MsgExecuteContract msg. */
        public msg: Uint8Array;

        /** MsgExecuteContract funds. */
        public funds: cosmos.base.v1beta1.ICoin[];

        /**
         * Creates a new MsgExecuteContract instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgExecuteContract instance
         */
        public static create(
          properties?: cosmwasm.wasm.v1.IMsgExecuteContract
        ): cosmwasm.wasm.v1.MsgExecuteContract;

        /**
         * Encodes the specified MsgExecuteContract message. Does not implicitly {@link cosmwasm.wasm.v1.MsgExecuteContract.verify|verify} messages.
         * @param m MsgExecuteContract message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1.IMsgExecuteContract,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgExecuteContract message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgExecuteContract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1.MsgExecuteContract;

        /**
         * Creates a MsgExecuteContract message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgExecuteContract
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmwasm.wasm.v1.MsgExecuteContract;

        /**
         * Creates a plain object from a MsgExecuteContract message. Also converts values to other types if specified.
         * @param m MsgExecuteContract
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmwasm.wasm.v1.MsgExecuteContract,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgExecuteContract to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a MsgExecuteContractResponse. */
      interface IMsgExecuteContractResponse {
        /** MsgExecuteContractResponse data */
        data?: Uint8Array | null;
      }

      /** Represents a MsgExecuteContractResponse. */
      class MsgExecuteContractResponse implements IMsgExecuteContractResponse {
        /**
         * Constructs a new MsgExecuteContractResponse.
         * @param [p] Properties to set
         */
        constructor(p?: cosmwasm.wasm.v1.IMsgExecuteContractResponse);

        /** MsgExecuteContractResponse data. */
        public data: Uint8Array;

        /**
         * Creates a new MsgExecuteContractResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgExecuteContractResponse instance
         */
        public static create(
          properties?: cosmwasm.wasm.v1.IMsgExecuteContractResponse
        ): cosmwasm.wasm.v1.MsgExecuteContractResponse;

        /**
         * Encodes the specified MsgExecuteContractResponse message. Does not implicitly {@link cosmwasm.wasm.v1.MsgExecuteContractResponse.verify|verify} messages.
         * @param m MsgExecuteContractResponse message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(
          m: cosmwasm.wasm.v1.IMsgExecuteContractResponse,
          w?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a MsgExecuteContractResponse message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MsgExecuteContractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          r: $protobuf.Reader | Uint8Array,
          l?: number
        ): cosmwasm.wasm.v1.MsgExecuteContractResponse;

        /**
         * Creates a MsgExecuteContractResponse message from a plain object. Also converts values to their respective internal types.
         * @param d Plain object
         * @returns MsgExecuteContractResponse
         */
        public static fromObject(d: {
          [k: string]: any;
        }): cosmwasm.wasm.v1.MsgExecuteContractResponse;

        /**
         * Creates a plain object from a MsgExecuteContractResponse message. Also converts values to other types if specified.
         * @param m MsgExecuteContractResponse
         * @param [o] Conversion options
         * @returns Plain object
         */
        public static toObject(
          m: cosmwasm.wasm.v1.MsgExecuteContractResponse,
          o?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this MsgExecuteContractResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }
  }
}

/** Namespace tendermint. */
export namespace tendermint {
  /** Namespace crypto. */
  namespace crypto {
    /** Properties of a PublicKey. */
    interface IPublicKey {
      /** PublicKey ed25519 */
      ed25519?: Uint8Array | null;

      /** PublicKey secp256k1 */
      secp256k1?: Uint8Array | null;
    }

    /** Represents a PublicKey. */
    class PublicKey implements IPublicKey {
      /**
       * Constructs a new PublicKey.
       * @param [p] Properties to set
       */
      constructor(p?: tendermint.crypto.IPublicKey);

      /** PublicKey ed25519. */
      public ed25519: Uint8Array;

      /** PublicKey secp256k1. */
      public secp256k1: Uint8Array;

      /** PublicKey sum. */
      public sum?: 'ed25519' | 'secp256k1';

      /**
       * Creates a new PublicKey instance using the specified properties.
       * @param [properties] Properties to set
       * @returns PublicKey instance
       */
      public static create(
        properties?: tendermint.crypto.IPublicKey
      ): tendermint.crypto.PublicKey;

      /**
       * Encodes the specified PublicKey message. Does not implicitly {@link tendermint.crypto.PublicKey.verify|verify} messages.
       * @param m PublicKey message or plain object to encode
       * @param [w] Writer to encode to
       * @returns Writer
       */
      public static encode(
        m: tendermint.crypto.IPublicKey,
        w?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a PublicKey message from the specified reader or buffer.
       * @param r Reader or buffer to decode from
       * @param [l] Message length if known beforehand
       * @returns PublicKey
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        r: $protobuf.Reader | Uint8Array,
        l?: number
      ): tendermint.crypto.PublicKey;

      /**
       * Creates a PublicKey message from a plain object. Also converts values to their respective internal types.
       * @param d Plain object
       * @returns PublicKey
       */
      public static fromObject(d: {
        [k: string]: any;
      }): tendermint.crypto.PublicKey;

      /**
       * Creates a plain object from a PublicKey message. Also converts values to other types if specified.
       * @param m PublicKey
       * @param [o] Conversion options
       * @returns Plain object
       */
      public static toObject(
        m: tendermint.crypto.PublicKey,
        o?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this PublicKey to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }
}
