window.c.ProjectShareBox = (function(m){
  return {
    view: function() {
      return m('.pop-share[data-ix=\'display-none-on-load\']', {style: {'display': ' block'}}, [m('.w-hidden-main.w-hidden-medium.w-clearfix', [m('a.btn.btn-small.btn-terciary.btn-inline.u-right[data-ix=\'close-popshare\'][href=\'#\']', {style: {'transition': ' all 0.5s ease 0s'}}, 'Fechar'),m('.fontsize-small.fontweight-semibold.u-marginbottom-30', 'Compartilhe este projeto')]),m('.w-widget.w-widget-facebook.w-hidden-small.w-hidden-tiny.share-block', [m('iframe[allowtransparency=\'true\'][frameborder=\'0\'][scrolling=\'no\'][src=\'//www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fwebflow&layout=button_count&locale=en_US&action=like&show_faces=false&share=false\']', {style: {'border': ' none', ' overflow': ' hidden', ' width': ' 90px', ' height': ' 20px'}})]),m('.w-widget.w-widget-twitter.w-hidden-small.w-hidden-tiny.share-block', [m('iframe[allowtransparency=\'true\'][frameborder=\'0\'][scrolling=\'no\'][src=\'//platform.twitter.com/widgets/tweet_button.html#url=http%3A%2F%2Fwebflow.com&counturl=webflow.com&text=Check%20out%20this%20site&count=horizontal&size=m&dnt=true\']', {style: {'border': ' none', ' overflow': ' hidden', ' width': ' 110px', ' height': ' 20px'}})]),m('a.w-hidden-small.w-hidden-tiny.fontsize-small.link-hidden.fontcolor-secondary[href=\'#\']', '< embed >'),m('.u-margintop-30', [m('.fontsize-small.fontweight-semibold.u-marginbottom-20', 'Insira um widget em seu site'),m('.w-form', [m('form[data-name=\'Email Form\'][id=\'email-form\'][name=\'email-form\']', [m('input.w-input[data-name=\'Name\'][id=\'name\'][name=\'name\'][placeholder=\'Enter your name\'][type=\'text\']')]),m('.w-form-done', [m('p', 'Thank you! Your submission has been received!')]),m('.w-form-fail', [m('p', 'Oops! Something went wrong while submitting the form')])]),m('.card-embed', [m('.card-project.card.u-radius', [m('.card-project-thumb'),m('.card-project-description', [m('.fontweight-semibold.fontsize-base.u-marginbottom-10.u-text-center-small-only.lineheight-tight', 'Um título de projeto com um nome grande pra caramba'),m('.w-hidden-small.w-hidden-tiny.fontcolor-secondary.fontsize-smaller', 'Nova linha de óculos de serragem desenvolvida a partir do reaproveitamento dos resíduos gerados na produção dos óculos Zerezes!')]),m('.w-hidden-small.w-hidden-tiny.w-clearfix.card-project-author.u-text-center-small-only', [m('.w-hidden-small.w-hidden-tiny.thumb.small.u-round.u-left'),m('.card-author-name', [m('a.link-hidden.fontsize-smaller[href=\'#\']', 'Márcio Oliveira')])]),m('.card-project-meter', [m('.meter', [m('.meter-fill')])]),m('.card-project-stats', [m('.w-row', [m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4', [m('.fontsize-base.fontweight-semibold', '37%')]),m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4.u-text-center-small-only', [m('.fontsize-smaller.fontweight-semibold', 'R$455.555'),m('.fontsize-smallest.lineheight-tightest', 'Levantados')]),m('.w-col.w-col-4.w-col-small-4.w-col-tiny-4.u-text-right', [m('.fontsize-smaller.fontweight-semibold', '27 dias'),m('.fontsize-smallest.lineheight-tightest', 'Restantes')])])])])])]),m('a.w-hidden-main.w-hidden-medium.btn.btn-medium.btn-fb.u-marginbottom-20[href=\'#\']', [m('span.fa.fa-facebook', '.'),' Compartilhe']),m('a.w-hidden-main.w-hidden-medium.btn.btn-medium.btn-tweet.u-marginbottom-20[href=\'#\']', [m('span.fa.fa-twitter', '.'),' Tweet']),m('a.w-hidden-main.w-hidden-medium.btn.btn-medium[href=\'#\']', [m('span.fa.fa-whatsapp', '.'),' Whatsapp'])]);
    }
  };
}(window.m));
