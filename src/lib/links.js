/** Op de homepage zijn ankers "#diensten"; op een dienstpagina verwijzen ze naar "/#diensten". #contact bestaat op elke pagina. */
export const navHref = (href, home = true) => (home || href === "#contact" ? href : `/${href}`);
