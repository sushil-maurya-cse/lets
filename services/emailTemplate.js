module.exports = ({emailFrom, downloadLink, size, expires}) => {
  return `
  <!DOCTYPE html >
  <html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Demystifying Email Design</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  
    <style type="text/css">
      a[x-apple-data-detectors] {color: inherit !important;}
    </style>
  
  </head>
  <body style="margin: 0; padding: 0;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td style="padding: 20px 0 30px 0;">
  
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
    <tr>
      <td align="center" bgcolor="#ffffff" style="padding: 40px 0 30px 0;">
        <img src="https://www.letsshareapps.com/wp-content/uploads/2014/11/logo-big-.png" alt="LetsShare" width="150" height="100" style="display: block;" />
      </td>
    </tr>
    <tr>
      <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
          <tr>
            <td style="color: #153643; font-family: Arial, sans-serif;">
              <h1 style="font-size: 24px; margin: 0;">Greetings from Letshare Family....</h1>
            </td>
          </tr>
          <tr>
            <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 12px 0 0 0;">
              <p style="margin: 0;"><b>${emailFrom}</b> has shared a file with you.</p>
            </td>
          </tr>
          <tr>
            <td>
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                <tr>
                  <td width="20" valign="top">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                      <tr>
                        <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 7px 0 10px 0;">
                          <p style="margin: 0;">${size} in total ・ Expires in ${expires}.</p></td></tr>
                         <tr>
                         <td><button style=" background-color: #684caf; /* Green */
                          border: none;
                          color: white;
                          padding: 15px 25px;
                          text-align: center;
                          text-decoration: none;
                          display: inline-block;
                          border-radius: 13px;
                          font-size: 16px;"><a href="${downloadLink}" style="text-decoration:none; color:white;">Download</a></button>
                        </td>
                      </tr>
                     
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td bgcolor="	#0066CC" style="padding: 30px 30px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
          <tr>
            <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;">
              <p style="margin: 0;padding-bottom: 3px;">&reg; Sushil, 2020<br/></p>
            <p> <a href="#" style="color: #ffffff; text-decoration: none; margin: 0;padding-bottom: 5px; color: #ffffff;">Report Abusive</a> </p>
            </td>
            <td align="right">
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                <tr>
                  <td>
                    <a href="http://www.twitter.com/">
                      <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="Twitter."  onmouseOver="this.style.transform = 'scale(1.1)'" onmouseOut="this.style.transform='scale(1.0)'" width="38" height="38" style="display: block;" border="0" />
                    </a>
                  </td>
                  <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>
                  <td>
                    <a href="http://www.twitter.com/" >
                      <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png" onmouseOver="this.style.transform = 'scale(1.1)'" onmouseOut="this.style.transform='scale(1.0)'" alt="Facebook." height="38" style="display: block; " border="0" />
                    </a>
                  </td>
                  <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>
                  <td>
                    <a href="http://www.linkedin.com/" >
                      <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/linkedin_circle-512.png" onmouseOver="this.style.transform = 'scale(1.1)'" onmouseOut="this.style.transform='scale(1.0)'" alt="Facebook." height="38" style="display: block; " border="0" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}