j$= jQuery.noConflict();
j$(document).ready(function(){
    j$("#personaFisicaActividadEmpresarial").hide();
    j$("#personaMoral").hide();
    j$('.btn').on('click', function(){
        j$('#personaFisica').hide();
        j$("#personaFisicaActividadEmpresarial").hide();
        j$("#personaMoral").hide();
        var idDiv= j$(this).attr('name');
        j$('#' + idDiv).show();                    
    });
});