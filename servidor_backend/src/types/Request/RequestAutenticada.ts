import { Request } from "express";

export default interface RequestAutenticada extends Request {
  idUsuario?: string;
}