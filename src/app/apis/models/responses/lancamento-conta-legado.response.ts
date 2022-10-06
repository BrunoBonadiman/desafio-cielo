import { LancamentosResponse } from "./lancamentos.response";
import { PaginationResponse } from "./pagination.response";
import { SummaryResponse } from "./summary.response";

export interface LancamentoContaLegadoResponse {
    Summary: Array<SummaryResponse>;
    Pagination: Array<PaginationResponse>;
    Items: Array<LancamentosResponse>;
}