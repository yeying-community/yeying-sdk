// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true"
// @generated from file yeying/api/invitation/invitation.proto (package yeying.api.invitation, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { MessageHeader, MessageHeaderJson, RequestPage, RequestPageJson, ResponsePage, ResponsePageJson, ResponseStatus, ResponseStatusJson } from "../common/message_pb";
import { file_yeying_api_common_message } from "../common/message_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file yeying/api/invitation/invitation.proto.
 */
export const file_yeying_api_invitation_invitation: GenFile = /*@__PURE__*/
  fileDesc("CiZ5ZXlpbmcvYXBpL2ludml0YXRpb24vaW52aXRhdGlvbi5wcm90bxIVeWV5aW5nLmFwaS5pbnZpdGF0aW9uIrgBChJJbnZpdGF0aW9uTWV0YWRhdGESOQoFc2NlbmUYASABKA4yKi55ZXlpbmcuYXBpLmludml0YXRpb24uSW52aXRhdGlvblNjZW5lRW51bRIMCgRjb2RlGAIgASgJEhEKCWNyZWF0ZWRBdBgDIAEoCRIRCglleHBpcmVkQXQYBCABKAkSDwoHaW52aXRlchgFIAEoCRIPCgdpbnZpdGVlGAYgASgJEhEKCXNpZ25hdHVyZRgHIAEoCSJTChJJbnZpdGF0aW9uVXNlU3RhdGUSDAoEY29kZRgBIAEoCRIOCgZ1c2VkQXQYAiABKAkSDAoEdXNlchgDIAEoCRIRCglzaWduYXR1cmUYBCABKAkijQEKF0NyZWF0ZUludml0YXRpb25SZXF1ZXN0EjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISQAoEYm9keRgCIAEoCzIyLnlleWluZy5hcGkuaW52aXRhdGlvbi5DcmVhdGVJbnZpdGF0aW9uUmVxdWVzdEJvZHkiXAobQ3JlYXRlSW52aXRhdGlvblJlcXVlc3RCb2R5Ej0KCmludml0YXRpb24YAiABKAsyKS55ZXlpbmcuYXBpLmludml0YXRpb24uSW52aXRhdGlvbk1ldGFkYXRhIo8BChhDcmVhdGVJbnZpdGF0aW9uUmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchJBCgRib2R5GAIgASgLMjMueWV5aW5nLmFwaS5pbnZpdGF0aW9uLkNyZWF0ZUludml0YXRpb25SZXNwb25zZUJvZHkikAEKHENyZWF0ZUludml0YXRpb25SZXNwb25zZUJvZHkSMQoGc3RhdHVzGAEgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMSPQoKaW52aXRhdGlvbhgCIAEoCzIpLnlleWluZy5hcGkuaW52aXRhdGlvbi5JbnZpdGF0aW9uTWV0YWRhdGEijQEKF1NlYXJjaEludml0YXRpb25SZXF1ZXN0EjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISQAoEYm9keRgCIAEoCzIyLnlleWluZy5hcGkuaW52aXRhdGlvbi5TZWFyY2hJbnZpdGF0aW9uUmVxdWVzdEJvZHkiSwobU2VhcmNoSW52aXRhdGlvblJlcXVlc3RCb2R5EiwKBHBhZ2UYASABKAsyHi55ZXlpbmcuYXBpLmNvbW1vbi5SZXF1ZXN0UGFnZSKPAQoYU2VhcmNoSW52aXRhdGlvblJlc3BvbnNlEjAKBmhlYWRlchgBIAEoCzIgLnlleWluZy5hcGkuY29tbW9uLk1lc3NhZ2VIZWFkZXISQQoEYm9keRgCIAEoCzIzLnlleWluZy5hcGkuaW52aXRhdGlvbi5TZWFyY2hJbnZpdGF0aW9uUmVzcG9uc2VCb2R5IsABChxTZWFyY2hJbnZpdGF0aW9uUmVzcG9uc2VCb2R5EjEKBnN0YXR1cxgBIAEoCzIhLnlleWluZy5hcGkuY29tbW9uLlJlc3BvbnNlU3RhdHVzEj4KC2ludml0YXRpb25zGAIgAygLMikueWV5aW5nLmFwaS5pbnZpdGF0aW9uLkludml0YXRpb25NZXRhZGF0YRItCgRwYWdlGAMgASgLMh8ueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VQYWdlIo0BChdJbnZpdGF0aW9uRGV0YWlsUmVxdWVzdBIwCgZoZWFkZXIYASABKAsyIC55ZXlpbmcuYXBpLmNvbW1vbi5NZXNzYWdlSGVhZGVyEkAKBGJvZHkYAiABKAsyMi55ZXlpbmcuYXBpLmludml0YXRpb24uSW52aXRhdGlvbkRldGFpbFJlcXVlc3RCb2R5IisKG0ludml0YXRpb25EZXRhaWxSZXF1ZXN0Qm9keRIMCgRjb2RlGAEgASgJIo8BChhJbnZpdGF0aW9uRGV0YWlsUmVzcG9uc2USMAoGaGVhZGVyGAEgASgLMiAueWV5aW5nLmFwaS5jb21tb24uTWVzc2FnZUhlYWRlchJBCgRib2R5GAIgASgLMjMueWV5aW5nLmFwaS5pbnZpdGF0aW9uLkludml0YXRpb25EZXRhaWxSZXNwb25zZUJvZHkiygEKHEludml0YXRpb25EZXRhaWxSZXNwb25zZUJvZHkSMQoGc3RhdHVzGAEgASgLMiEueWV5aW5nLmFwaS5jb21tb24uUmVzcG9uc2VTdGF0dXMSPQoKaW52aXRhdGlvbhgCIAEoCzIpLnlleWluZy5hcGkuaW52aXRhdGlvbi5JbnZpdGF0aW9uTWV0YWRhdGESOAoFc3RhdGUYAyABKAsyKS55ZXlpbmcuYXBpLmludml0YXRpb24uSW52aXRhdGlvblVzZVN0YXRlKk4KE0ludml0YXRpb25TY2VuZUVudW0SHAoYSU5WSVRBVElPTl9TQ0VORV9VTktOT1dOEAASGQoVSU5WSVRBVElPTl9TQ0VORV9VU0VSEAEy0wIKCkludml0YXRpb24SawoGQ3JlYXRlEi4ueWV5aW5nLmFwaS5pbnZpdGF0aW9uLkNyZWF0ZUludml0YXRpb25SZXF1ZXN0Gi8ueWV5aW5nLmFwaS5pbnZpdGF0aW9uLkNyZWF0ZUludml0YXRpb25SZXNwb25zZSIAEmsKBlNlYXJjaBIuLnlleWluZy5hcGkuaW52aXRhdGlvbi5TZWFyY2hJbnZpdGF0aW9uUmVxdWVzdBovLnlleWluZy5hcGkuaW52aXRhdGlvbi5TZWFyY2hJbnZpdGF0aW9uUmVzcG9uc2UiABJrCgZEZXRhaWwSLi55ZXlpbmcuYXBpLmludml0YXRpb24uSW52aXRhdGlvbkRldGFpbFJlcXVlc3QaLy55ZXlpbmcuYXBpLmludml0YXRpb24uSW52aXRhdGlvbkRldGFpbFJlc3BvbnNlIgBCF1oVeWV5aW5nL2FwaS9pbnZpdGF0aW9uYgZwcm90bzM", [file_yeying_api_common_message]);

/**
 * @generated from message yeying.api.invitation.InvitationMetadata
 */
export type InvitationMetadata = Message<"yeying.api.invitation.InvitationMetadata"> & {
  /**
   * 使用场景 
   *
   * @generated from field: yeying.api.invitation.InvitationSceneEnum scene = 1;
   */
  scene: InvitationSceneEnum;

  /**
   * 邀请码 
   *
   * @generated from field: string code = 2;
   */
  code: string;

  /**
   * 创建时间 
   *
   * @generated from field: string createdAt = 3;
   */
  createdAt: string;

  /**
   * 有效截止日期 
   *
   * @generated from field: string expiredAt = 4;
   */
  expiredAt: string;

  /**
   * 邀请者身份ID
   *
   * @generated from field: string inviter = 5;
   */
  inviter: string;

  /**
   * 受邀者身份ID，可以不填，表示邀请码可以给任何身份使用
   *
   * @generated from field: string invitee = 6;
   */
  invitee: string;

  /**
   * 邀请者签名
   *
   * @generated from field: string signature = 7;
   */
  signature: string;
};

/**
 * @generated from message yeying.api.invitation.InvitationMetadata
 */
export type InvitationMetadataJson = {
  /**
   * 使用场景 
   *
   * @generated from field: yeying.api.invitation.InvitationSceneEnum scene = 1;
   */
  scene?: InvitationSceneEnumJson;

  /**
   * 邀请码 
   *
   * @generated from field: string code = 2;
   */
  code?: string;

  /**
   * 创建时间 
   *
   * @generated from field: string createdAt = 3;
   */
  createdAt?: string;

  /**
   * 有效截止日期 
   *
   * @generated from field: string expiredAt = 4;
   */
  expiredAt?: string;

  /**
   * 邀请者身份ID
   *
   * @generated from field: string inviter = 5;
   */
  inviter?: string;

  /**
   * 受邀者身份ID，可以不填，表示邀请码可以给任何身份使用
   *
   * @generated from field: string invitee = 6;
   */
  invitee?: string;

  /**
   * 邀请者签名
   *
   * @generated from field: string signature = 7;
   */
  signature?: string;
};

/**
 * Describes the message yeying.api.invitation.InvitationMetadata.
 * Use `create(InvitationMetadataSchema)` to create a new message.
 */
export const InvitationMetadataSchema: GenMessage<InvitationMetadata, InvitationMetadataJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 0);

/**
 * 邀请码被使用的状态记录
 *
 * @generated from message yeying.api.invitation.InvitationUseState
 */
export type InvitationUseState = Message<"yeying.api.invitation.InvitationUseState"> & {
  /**
   * 邀请码 
   *
   * @generated from field: string code = 1;
   */
  code: string;

  /**
   * 使用时间 
   *
   * @generated from field: string usedAt = 2;
   */
  usedAt: string;

  /**
   * 使用者身份ID 
   *
   * @generated from field: string user = 3;
   */
  user: string;

  /**
   * 受邀者签名 
   *
   * @generated from field: string signature = 4;
   */
  signature: string;
};

/**
 * 邀请码被使用的状态记录
 *
 * @generated from message yeying.api.invitation.InvitationUseState
 */
export type InvitationUseStateJson = {
  /**
   * 邀请码 
   *
   * @generated from field: string code = 1;
   */
  code?: string;

  /**
   * 使用时间 
   *
   * @generated from field: string usedAt = 2;
   */
  usedAt?: string;

  /**
   * 使用者身份ID 
   *
   * @generated from field: string user = 3;
   */
  user?: string;

  /**
   * 受邀者签名 
   *
   * @generated from field: string signature = 4;
   */
  signature?: string;
};

/**
 * Describes the message yeying.api.invitation.InvitationUseState.
 * Use `create(InvitationUseStateSchema)` to create a new message.
 */
export const InvitationUseStateSchema: GenMessage<InvitationUseState, InvitationUseStateJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 1);

/**
 * @generated from message yeying.api.invitation.CreateInvitationRequest
 */
export type CreateInvitationRequest = Message<"yeying.api.invitation.CreateInvitationRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.invitation.CreateInvitationRequestBody body = 2;
   */
  body?: CreateInvitationRequestBody;
};

/**
 * @generated from message yeying.api.invitation.CreateInvitationRequest
 */
export type CreateInvitationRequestJson = {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeaderJson;

  /**
   * @generated from field: yeying.api.invitation.CreateInvitationRequestBody body = 2;
   */
  body?: CreateInvitationRequestBodyJson;
};

/**
 * Describes the message yeying.api.invitation.CreateInvitationRequest.
 * Use `create(CreateInvitationRequestSchema)` to create a new message.
 */
export const CreateInvitationRequestSchema: GenMessage<CreateInvitationRequest, CreateInvitationRequestJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 2);

/**
 * @generated from message yeying.api.invitation.CreateInvitationRequestBody
 */
export type CreateInvitationRequestBody = Message<"yeying.api.invitation.CreateInvitationRequestBody"> & {
  /**
   * @generated from field: yeying.api.invitation.InvitationMetadata invitation = 2;
   */
  invitation?: InvitationMetadata;
};

/**
 * @generated from message yeying.api.invitation.CreateInvitationRequestBody
 */
export type CreateInvitationRequestBodyJson = {
  /**
   * @generated from field: yeying.api.invitation.InvitationMetadata invitation = 2;
   */
  invitation?: InvitationMetadataJson;
};

/**
 * Describes the message yeying.api.invitation.CreateInvitationRequestBody.
 * Use `create(CreateInvitationRequestBodySchema)` to create a new message.
 */
export const CreateInvitationRequestBodySchema: GenMessage<CreateInvitationRequestBody, CreateInvitationRequestBodyJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 3);

/**
 * @generated from message yeying.api.invitation.CreateInvitationResponse
 */
export type CreateInvitationResponse = Message<"yeying.api.invitation.CreateInvitationResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.invitation.CreateInvitationResponseBody body = 2;
   */
  body?: CreateInvitationResponseBody;
};

/**
 * @generated from message yeying.api.invitation.CreateInvitationResponse
 */
export type CreateInvitationResponseJson = {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeaderJson;

  /**
   * @generated from field: yeying.api.invitation.CreateInvitationResponseBody body = 2;
   */
  body?: CreateInvitationResponseBodyJson;
};

/**
 * Describes the message yeying.api.invitation.CreateInvitationResponse.
 * Use `create(CreateInvitationResponseSchema)` to create a new message.
 */
export const CreateInvitationResponseSchema: GenMessage<CreateInvitationResponse, CreateInvitationResponseJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 4);

/**
 * @generated from message yeying.api.invitation.CreateInvitationResponseBody
 */
export type CreateInvitationResponseBody = Message<"yeying.api.invitation.CreateInvitationResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: yeying.api.invitation.InvitationMetadata invitation = 2;
   */
  invitation?: InvitationMetadata;
};

/**
 * @generated from message yeying.api.invitation.CreateInvitationResponseBody
 */
export type CreateInvitationResponseBodyJson = {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatusJson;

  /**
   * @generated from field: yeying.api.invitation.InvitationMetadata invitation = 2;
   */
  invitation?: InvitationMetadataJson;
};

/**
 * Describes the message yeying.api.invitation.CreateInvitationResponseBody.
 * Use `create(CreateInvitationResponseBodySchema)` to create a new message.
 */
export const CreateInvitationResponseBodySchema: GenMessage<CreateInvitationResponseBody, CreateInvitationResponseBodyJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 5);

/**
 * @generated from message yeying.api.invitation.SearchInvitationRequest
 */
export type SearchInvitationRequest = Message<"yeying.api.invitation.SearchInvitationRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.invitation.SearchInvitationRequestBody body = 2;
   */
  body?: SearchInvitationRequestBody;
};

/**
 * @generated from message yeying.api.invitation.SearchInvitationRequest
 */
export type SearchInvitationRequestJson = {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeaderJson;

  /**
   * @generated from field: yeying.api.invitation.SearchInvitationRequestBody body = 2;
   */
  body?: SearchInvitationRequestBodyJson;
};

/**
 * Describes the message yeying.api.invitation.SearchInvitationRequest.
 * Use `create(SearchInvitationRequestSchema)` to create a new message.
 */
export const SearchInvitationRequestSchema: GenMessage<SearchInvitationRequest, SearchInvitationRequestJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 6);

/**
 * @generated from message yeying.api.invitation.SearchInvitationRequestBody
 */
export type SearchInvitationRequestBody = Message<"yeying.api.invitation.SearchInvitationRequestBody"> & {
  /**
   * @generated from field: yeying.api.common.RequestPage page = 1;
   */
  page?: RequestPage;
};

/**
 * @generated from message yeying.api.invitation.SearchInvitationRequestBody
 */
export type SearchInvitationRequestBodyJson = {
  /**
   * @generated from field: yeying.api.common.RequestPage page = 1;
   */
  page?: RequestPageJson;
};

/**
 * Describes the message yeying.api.invitation.SearchInvitationRequestBody.
 * Use `create(SearchInvitationRequestBodySchema)` to create a new message.
 */
export const SearchInvitationRequestBodySchema: GenMessage<SearchInvitationRequestBody, SearchInvitationRequestBodyJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 7);

/**
 * @generated from message yeying.api.invitation.SearchInvitationResponse
 */
export type SearchInvitationResponse = Message<"yeying.api.invitation.SearchInvitationResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.invitation.SearchInvitationResponseBody body = 2;
   */
  body?: SearchInvitationResponseBody;
};

/**
 * @generated from message yeying.api.invitation.SearchInvitationResponse
 */
export type SearchInvitationResponseJson = {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeaderJson;

  /**
   * @generated from field: yeying.api.invitation.SearchInvitationResponseBody body = 2;
   */
  body?: SearchInvitationResponseBodyJson;
};

/**
 * Describes the message yeying.api.invitation.SearchInvitationResponse.
 * Use `create(SearchInvitationResponseSchema)` to create a new message.
 */
export const SearchInvitationResponseSchema: GenMessage<SearchInvitationResponse, SearchInvitationResponseJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 8);

/**
 * @generated from message yeying.api.invitation.SearchInvitationResponseBody
 */
export type SearchInvitationResponseBody = Message<"yeying.api.invitation.SearchInvitationResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: repeated yeying.api.invitation.InvitationMetadata invitations = 2;
   */
  invitations: InvitationMetadata[];

  /**
   * @generated from field: yeying.api.common.ResponsePage page = 3;
   */
  page?: ResponsePage;
};

/**
 * @generated from message yeying.api.invitation.SearchInvitationResponseBody
 */
export type SearchInvitationResponseBodyJson = {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatusJson;

  /**
   * @generated from field: repeated yeying.api.invitation.InvitationMetadata invitations = 2;
   */
  invitations?: InvitationMetadataJson[];

  /**
   * @generated from field: yeying.api.common.ResponsePage page = 3;
   */
  page?: ResponsePageJson;
};

/**
 * Describes the message yeying.api.invitation.SearchInvitationResponseBody.
 * Use `create(SearchInvitationResponseBodySchema)` to create a new message.
 */
export const SearchInvitationResponseBodySchema: GenMessage<SearchInvitationResponseBody, SearchInvitationResponseBodyJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 9);

/**
 * @generated from message yeying.api.invitation.InvitationDetailRequest
 */
export type InvitationDetailRequest = Message<"yeying.api.invitation.InvitationDetailRequest"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.invitation.InvitationDetailRequestBody body = 2;
   */
  body?: InvitationDetailRequestBody;
};

/**
 * @generated from message yeying.api.invitation.InvitationDetailRequest
 */
export type InvitationDetailRequestJson = {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeaderJson;

  /**
   * @generated from field: yeying.api.invitation.InvitationDetailRequestBody body = 2;
   */
  body?: InvitationDetailRequestBodyJson;
};

/**
 * Describes the message yeying.api.invitation.InvitationDetailRequest.
 * Use `create(InvitationDetailRequestSchema)` to create a new message.
 */
export const InvitationDetailRequestSchema: GenMessage<InvitationDetailRequest, InvitationDetailRequestJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 10);

/**
 * @generated from message yeying.api.invitation.InvitationDetailRequestBody
 */
export type InvitationDetailRequestBody = Message<"yeying.api.invitation.InvitationDetailRequestBody"> & {
  /**
   * @generated from field: string code = 1;
   */
  code: string;
};

/**
 * @generated from message yeying.api.invitation.InvitationDetailRequestBody
 */
export type InvitationDetailRequestBodyJson = {
  /**
   * @generated from field: string code = 1;
   */
  code?: string;
};

/**
 * Describes the message yeying.api.invitation.InvitationDetailRequestBody.
 * Use `create(InvitationDetailRequestBodySchema)` to create a new message.
 */
export const InvitationDetailRequestBodySchema: GenMessage<InvitationDetailRequestBody, InvitationDetailRequestBodyJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 11);

/**
 * @generated from message yeying.api.invitation.InvitationDetailResponse
 */
export type InvitationDetailResponse = Message<"yeying.api.invitation.InvitationDetailResponse"> & {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeader;

  /**
   * @generated from field: yeying.api.invitation.InvitationDetailResponseBody body = 2;
   */
  body?: InvitationDetailResponseBody;
};

/**
 * @generated from message yeying.api.invitation.InvitationDetailResponse
 */
export type InvitationDetailResponseJson = {
  /**
   * @generated from field: yeying.api.common.MessageHeader header = 1;
   */
  header?: MessageHeaderJson;

  /**
   * @generated from field: yeying.api.invitation.InvitationDetailResponseBody body = 2;
   */
  body?: InvitationDetailResponseBodyJson;
};

/**
 * Describes the message yeying.api.invitation.InvitationDetailResponse.
 * Use `create(InvitationDetailResponseSchema)` to create a new message.
 */
export const InvitationDetailResponseSchema: GenMessage<InvitationDetailResponse, InvitationDetailResponseJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 12);

/**
 * @generated from message yeying.api.invitation.InvitationDetailResponseBody
 */
export type InvitationDetailResponseBody = Message<"yeying.api.invitation.InvitationDetailResponseBody"> & {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatus;

  /**
   * @generated from field: yeying.api.invitation.InvitationMetadata invitation = 2;
   */
  invitation?: InvitationMetadata;

  /**
   * @generated from field: yeying.api.invitation.InvitationUseState state = 3;
   */
  state?: InvitationUseState;
};

/**
 * @generated from message yeying.api.invitation.InvitationDetailResponseBody
 */
export type InvitationDetailResponseBodyJson = {
  /**
   * @generated from field: yeying.api.common.ResponseStatus status = 1;
   */
  status?: ResponseStatusJson;

  /**
   * @generated from field: yeying.api.invitation.InvitationMetadata invitation = 2;
   */
  invitation?: InvitationMetadataJson;

  /**
   * @generated from field: yeying.api.invitation.InvitationUseState state = 3;
   */
  state?: InvitationUseStateJson;
};

/**
 * Describes the message yeying.api.invitation.InvitationDetailResponseBody.
 * Use `create(InvitationDetailResponseBodySchema)` to create a new message.
 */
export const InvitationDetailResponseBodySchema: GenMessage<InvitationDetailResponseBody, InvitationDetailResponseBodyJson> = /*@__PURE__*/
  messageDesc(file_yeying_api_invitation_invitation, 13);

/**
 * @generated from enum yeying.api.invitation.InvitationSceneEnum
 */
export enum InvitationSceneEnum {
  /**
   * 未知编码，是一种占位符
   *
   * @generated from enum value: INVITATION_SCENE_UNKNOWN = 0;
   */
  INVITATION_SCENE_UNKNOWN = 0,

  /**
   * 用户邀请码，成为某个服务的用户，用于不完全开放的服务，只允许受邀使用该服务
   *
   * @generated from enum value: INVITATION_SCENE_USER = 1;
   */
  INVITATION_SCENE_USER = 1,
}

/**
 * @generated from enum yeying.api.invitation.InvitationSceneEnum
 */
export type InvitationSceneEnumJson = "INVITATION_SCENE_UNKNOWN" | "INVITATION_SCENE_USER";

/**
 * Describes the enum yeying.api.invitation.InvitationSceneEnum.
 */
export const InvitationSceneEnumSchema: GenEnum<InvitationSceneEnum, InvitationSceneEnumJson> = /*@__PURE__*/
  enumDesc(file_yeying_api_invitation_invitation, 0);

/**
 * @generated from service yeying.api.invitation.Invitation
 */
export const Invitation: GenService<{
  /**
   * 创建邀请码，通常是服务所有者才有权限创建
   *
   * @generated from rpc yeying.api.invitation.Invitation.Create
   */
  create: {
    methodKind: "unary";
    input: typeof CreateInvitationRequestSchema;
    output: typeof CreateInvitationResponseSchema;
  },
  /**
   * 搜索邀请码
   *
   * @generated from rpc yeying.api.invitation.Invitation.Search
   */
  search: {
    methodKind: "unary";
    input: typeof SearchInvitationRequestSchema;
    output: typeof SearchInvitationResponseSchema;
  },
  /**
   * 查询邀请码详情
   *
   * @generated from rpc yeying.api.invitation.Invitation.Detail
   */
  detail: {
    methodKind: "unary";
    input: typeof InvitationDetailRequestSchema;
    output: typeof InvitationDetailResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_yeying_api_invitation_invitation, 0);

